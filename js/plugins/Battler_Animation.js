//=============================================================================
// Battler_Animation.js
//=============================================================================

/*:
 * @plugindesc 戦闘時、敵をアニメーションさせます。
 * @author 村人C
 *
 * @help
 *
 * 使い方
 * コマンド:
 * Wait
 * アニメーションを更新する間隔。
 *
 * Animation
 * アニメーションの数。
 *
 * アニメーションさせたい画像の名前の後ろに _〇〇 を追加して下さい。
 * 
 * 例 Enemy の画像を5アニメーションさせたい
 * Enemy_01
 * Enemy_02
 * Enemy_03
 * Enemy_04
 * Enemy_05
 * の様に連番にします。
 *
 * 仕様
 *
 * アニメーションの判定で名前に _ があるかで分岐しているので
 * 名前に _ をつける場合は、アニメーション画像だけにして下さい。
 * デフォルトで入っている
 * Actor1_〇〇、General_〇〇は名前を変更しないとエラーが出ますので注意して下さい。
 *
 * アニメーション画像が、一瞬ちらつくことがありますが、画像読み込み時の仕様です。
 *
 * 
 * readmeやスタッフロールの明記、使用報告は任意
 *
 * @param Wait
 * @desc アニメーションを更新する間隔
 * デフォルト: 10
 * @default 10
 *
 * @param Animation
 * @desc アニメーションの数
 * デフォルト: 6
 * @default 6
 *
 */

var Battler_Animation = Battler_Animation || {};
Battler_Animation.Status = []; // 格納用に配列の作成
Battler_Animation.Parameters = PluginManager.parameters('Battler_Animation');
// 初期設定
Battler_Animation.Status[0] = Number(Battler_Animation.Parameters["Wait"])  || 10
Battler_Animation.Status[1] = Number(Battler_Animation.Parameters["Animation"])  || 6

// 追加
var _Sprite_Enemy_updateBitmap_Battler_Animation = Sprite_Enemy.prototype.updateBitmap;
Sprite_Enemy.prototype.updateBitmap = function() {
	_Sprite_Enemy_updateBitmap_Battler_Animation.call(this);
	var name = this._enemy.battlerName();
	var hue = this._enemy.battlerHue();
	this._set_animations(name, hue);
};

// 追加
var _Sprite_Enemy_initialize_Battler_Animation = Sprite_Enemy.prototype.initialize;
Sprite_Enemy.prototype.initialize = function(battler) {
	_Sprite_Enemy_initialize_Battler_Animation.call(this, battler);
	this._wait_cnt  = 0; // 追加
	this._anime_cnt = 1; // 追加
	// 事前に読み込み
	var name = battler.battlerName();
    var hue = battler.battlerHue();
	var _name = name.split("_") // 名前を分割
	if (_name[1] === undefined) {
		this.loadBitmap(name, hue); // アニメーションなし
	}
	else {
		// 事前に読み込み
		this._bitmaps  = [this.bitmap];
		if (this._bitmaps[2] === undefined) {
			for (var i = 2; i < Battler_Animation.Status[1]; i++) {
				if (i > 9) {
					var filename = _name[0] + '_' + String(i);
				}
				else {
					var filename = _name[0] + '_' + String(0) + String(i);
				}
				this._bitmaps[i] = ImageManager.loadEnemy(filename, hue);
			}
		}
	}
};

// 追加
Sprite_Enemy.prototype._set_animations = function(name, hue) {
	// アニメーション判定
	if ((this._wait_cnt % Battler_Animation.Status[0]) === 0) {
		// カウントリセット判定
		if (this._anime_cnt > Battler_Animation.Status[1]) {
			this._anime_cnt = 1 // カウントリセット
		}
		var _name = name.split("_") // 名前を分割
		if (_name[1] === undefined) {
			this.loadBitmap(name, hue); // アニメーションなし
		}
		else {
			if (this._anime_cnt > 9) { // 9以上
				this.loadBitmap(_name[0] + '_' + String(this._anime_cnt), hue); // 画像の読み込み
			}
			else { // 9以下
				this.loadBitmap(_name[0] + '_' + String(0) + String(this._anime_cnt), hue); // 画像の読み込み
			}
		}
		this._anime_cnt += 1; // 表示アニメ判定
	}
	this._wait_cnt = (this._wait_cnt + 1) % (Battler_Animation.Status[1] * Battler_Animation.Status[0])
}