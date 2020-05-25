//=============================================================================
// OnlineAvatar.js
// PUBLIC DOMAIN
// ----------------------------------------------------------------------------
// （これ以前の更新履歴は記録していません）
// 2016/10/25 スイッチ・変数同期時、ツクール上とサーバー上でデータが食い違う不具合を修正しました
// 2016/11/09 同じマップへの場所移動時、アバターが分身するのを修正しました
// 2016/11/14 イベント動的生成プラグイン(EventReSpawn.js)との競合対策
// 2018/10/12 firebaseのデータベース作成方法が変わったので、プラグインヘルプの手順に追記
//=============================================================================

/*:
 * @plugindesc Firebaseを使ってプレイヤーをオンライン同期します。
 * @author くらむぼん
 *
 * @param apiKey2
 * @desc FirebaseのapiKey。各自コピペしてきてね
 * @default *******************
 * @type variable
 *
 * @param authDomain2
 * @desc FirebaseのauthDomain。各自コピペしてきてね
 * @default **********.firebaseapp.com
 * @type variable
 * 
 * @param databaseURL2
 * @desc FirebaseのdatabaseURL。各自コピペしてきてね
 * @default https://**********.firebaseio.com
 * @type variable
 * 
 * @param avatarEvent2
 * @desc アバターにコピーするコモンイベントの番号。0でアバター機能そのものをオフ
 * @default 1
 *
 * @param syncSwitchStart2
 * @desc 全プレイヤーでオンライン共有するスイッチの番号の始まり。両方0で共有機能そのものをオフ
 * @default 11
 *
 * @param syncSwitchEnd2
 * @desc 全プレイヤーでオンライン共有するスイッチの番号の終わり。両方0で共有機能そのものをオフ
 * @default 20
 *
 * @param syncVariableStart2
 * @desc 全プレイヤーでオンライン共有する変数の番号の始まり。両方0で共有機能そのものをオフ
 * @default 11
 *
 * @param syncVariableEnd2
 * @desc 全プレイヤーでオンライン共有する変数の番号の終わり。両方0で共有機能そのものをオフ
 * @default 20
 *
 * @help
 * 外部のBaaSであるFirebaseと連携して、MMORPGのような
 * オンラインのアバター（プレイヤーキャラ）表示に対応するプラグインです。
 * さらにスイッチ・変数同期機能も付け加えてみました。
 * 
 * 始め方：
 * １．Firebaseの公式サイト(https://console.firebase.google.com/)で、
 * 　　Googleアカウントを(持って無ければ)取得し、「新規プロジェクトを作成」する
 * ２．「ウェブアプリにFirebaseを追加」ボタンを押して
 * 　　apiKey、authDomain、databaseURLをプラグインのパラメータにコピペ
 * ３．左メニューから「Authentication」→上部から「ログイン方法」→「匿名」を有効にする
 * ４．左メニューから「Database」->「またはRealtime Databaseを選択」の中の「データベースを作成」を押す
 * ５．現れた選択肢の中から「テストモードで開始」を選択して、有効にする
 * ６．ゲームを多重起動すると、すべてのプレイヤーのアバターが画面に表示されます！
 * ※テストプレイボタンからは多重起動できないので、Firefoxからindex.htmlを開く
 * 
 * ！注意！
 * 多くの投稿サイトでは安全のためContent Security Policyという機能により
 * Firebaseへのオンライン通信が制限されています。
 * もしあなたがこのプラグインを使ったゲームを投稿する予定がある場合は、
 * その投稿先でこのプラグインが使えるかどうか必ず先に確かめておいてください！
 * 
 * 
 * スイッチ・変数の同期：
 * syncSwitchStart、syncSwitchEnd、syncVariableStart、syncVariableEndの
 * ４つのパラメータで「同期したいスイッチと変数の範囲」を設定します。
 * （初期設定ではスイッチ・変数共に11～20の番号が共有されます）
 * その範囲のスイッチ・変数はオンライン通信によって全プレイヤーで
 * 同じ値が共有されます！これによりアバターを出すだけに留まらず
 * オンラインを利用した様々な種類のゲームを作れる…と思います。
 * 
 * 応用編：
 * 画面に表示されるアバターは、avatarEventで指定した番号のコモンイベントの
 * 「実行内容」を自分自身の実行内容にコピーし、並列処理扱いで実行します。
 * これと下記のプラグインコマンドを組み合わせるとチャットとかも実装できます。
 * 詳しくはサンプル見てね→https://krmbn0576.github.io/rpgmakermv/
 * 
 * プラグインコマンド：
 * online 1 to chat　変数１番の内容を「chat」という名前で送信します。
 * online 1 from chat　「そのアバターが」送信した「chat」を変数１番に代入します。
 * 
 * ライセンス：
 * このプラグインの利用法に制限はありません。お好きなようにどうぞ。
 */

function OnlineManager2() {
	throw new Error('This is a static class');
}

function Game_Avatar2() {
	this.initialize.apply(this, arguments);
}

(function() {
	'use strict';
	OnlineManager2.parameters = PluginManager.parameters('OnlineAvatar2');
	OnlineManager2.url = 'https://www.gstatic.com/firebasejs/live/3.0/firebase.js';
	OnlineManager2.variableRef = null;
	OnlineManager2.user = null;
	OnlineManager2.syncBusy = false;	//同期接続する瞬間、送信が受信を上書きするのを阻止

	//ネット上からfirebaseファイルを読み込む
	OnlineManager2.initialize = function() {
		var script2 = document.createElement('script');
		script2.type = 'text/javascript';
		script2.src = this.url;
		script2.async = true;
		script2.onload = this.awake.bind(this);
		script2.onerror = function(e) {
			throw new Error('firebaseの読み込みに失敗しました。F5でやり直してみてください。');
		};
		document.body.appendChild(script2);
	};

	//firebaseを起動
	OnlineManager2.awake = function() {
		var ps = this.parameters;
		//ps['avatarEvent2'] = +ps['avatarEvent2'];
		//ps['syncSwitchStart2'] = +ps['syncSwitchStart2'];
		//ps['syncSwitchEnd2'] = +ps['syncSwitchEnd2'];
		ps['syncVariableStart2'] = +ps['syncVariableStart2'];
		ps['syncVariableEnd2'] = +ps['syncVariableEnd2'];

		try {

			firebase.initializeApp({apiKey: ps['apiKey2'], authDomain: ps['authDomain2'], databaseURL: ps['databaseURL2']});
		} catch(e) {
			throw new Error('apiKeyが正しく設定されていません。ご確認ください。');
		}

		this.auth();
	};

	//firebaseアプリにアクセスして匿名サインイン
	//パスワード認証とかTwitter連携認証でログインさせたい場合はこのメソッドを改造しましょう
	OnlineManager2.auth = function() {
		firebase.auth().signInAnonymously().then(this.start.bind(this)).catch(SceneManager.catchException.bind(SceneManager));
	};

	//サインイン完了後
	//オンライン接続のイベント登録に関する記述(xxxRef.on()とか)が書いてある関数はこのメソッドから呼び出すと良さげ
	OnlineManager2.start = function(user) {
		this.user = user;
		//再接続時にonDisconnectを張り直す
//app2 = firebase.initializeApp({
//  databaseURL: "https://cardward1-bb5f9.firebaseio.com"
//}, 'app2');
		var connectedRef = firebase.database().ref('.info/connected');
		connectedRef.on('value', function(data) {
			if (data.val() && OnlineManager2.selfRef) OnlineManager2.selfRef.onDisconnect().remove();
		});

		//接続が最初のマップ読み込みよりも遅延した時は、今いるマップのオンラインデータを購読
		//if (this.mapExists()) this.connectNewMap();

		if ($gameSwitches) this.startSync();
	};

	//スイッチと変数のオンライン同期の開始
	OnlineManager2.startSync = function() {
//app2 = firebase.initializeApp({
//  databaseURL: "https://cardward1-bb5f9.firebaseio.com"
//}, 'app2');
		if (!this.user) return;
		if (this.parameters['syncVariableStart2'] || this.parameters['syncVariableEnd2']) {
			if (this.variableRef) this.variableRef.off();
			else this.variableRef = firebase.database().ref('variables2');
			OnlineManager2.syncBusy = true;
			this.variableRef.once('value', function(data) {
				OnlineManager2.syncBusy = false;
			});
			this.variableRef.on('child_added', function(data) {
				$gameVariables.setValue(data.key, data.val(), true);
			});
			this.variableRef.on('child_changed', function(data) {
				$gameVariables.setValue(data.key, data.val(), true);
			});
		}
	};


	//変数が同期範囲内
	OnlineManager2.variableInRange = function(variableId) {
		return this.parameters['syncVariableStart2'] <= variableId && variableId <= this.parameters['syncVariableEnd2'];
	};


	//変数を送信
	OnlineManager2.sendVariable = function(variableId, value) {
		if (this.variableRef && !this.syncBusy && this.variableInRange(variableId)) {
			var send = {};
			send[variableId] = value;
			this.variableRef.update(send);
		}
	};



	//OnlineManagerを起動
	var _SceneManager_initialize = SceneManager.initialize;
	SceneManager.initialize = function() {
		_SceneManager_initialize.apply(this, arguments);
		OnlineManager2.initialize();
	};


	//変数同期
	var _Game_Variables_setValue = Game_Variables.prototype.setValue;
	Game_Variables.prototype.setValue = function(variableId, value, byOnline) {
		_Game_Variables_setValue.call(this, variableId, value);
		if (!byOnline)
 OnlineManager2.sendVariable(variableId, this.value(variableId));
	};

	//スイッチ・変数の初期化時に、再同期処理（タイミングはスイッチが代表する）
	var _Game_Switches_initialize = Game_Switches.prototype.initialize;
	Game_Switches.prototype.initialize = function() {
		_Game_Switches_initialize.apply(this, arguments);
		OnlineManager2.startSync();
	};

	//オンライン経由でスイッチ・変数が変更された時、デバッグウィンドウ(F9)に反映
	//やや重い処理だが、F9はスマホやブラウザで実行されることはないためこれで大丈夫
	var _Window_DebugEdit_update = Window_DebugEdit.prototype.update;
	Window_DebugEdit.prototype.update = function() {
		_Window_DebugEdit_update.apply(this, arguments);
		this.refresh();
	};

 })();
