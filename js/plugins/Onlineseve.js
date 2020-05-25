//=============================================================================
// SNZ_FirebaseSave.js
// Version: 1.0
//----------------------------------------------------------------------------
// by 縺励ｓ縺�
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
@plugindesc Firebase縺ｨ縺�≧Web繧ｵ繝ｼ繝薙せ繧剃ｽｿ逕ｨ縺励√け繝ｩ繧ｦ繝峨そ繝ｼ繝厄ｼ医が繝ｳ繝ｩ繧､繝ｳ繧ｻ繝ｼ繝厄ｼ峨ｒ螳溽樟縲�
@author 縺励ｓ縺�

@help 縲後け繝ｩ繧ｦ繝峨〒繧ｪ繝ｼ繝医そ繝ｼ繝悶阪→縺�≧陌ｫ縺ｮ縺�＞鬘俶悍繧定�蛻�↑繧翫↓蜿ｶ縺医※縺ｿ縺ｾ縺励◆縲�
繧ｲ繝ｼ繝�繝��繧ｿ荳蠑上ｒ繝ｬ繝ｳ繧ｿ繝ｫ繧ｵ繝ｼ繝舌�縺ｪ縺ｩ縺ｫ繧｢繝��繝ｭ繝ｼ繝峨☆繧九％縺ｨ繧�
諠ｳ螳壹＠縺ｦ菴懊▲縺ｦ縺�∪縺吶�
��Firebase縺ｫ繧ゅ�繧ｹ繝�ぅ繝ｳ繧ｰ繧ｵ繝ｼ繝薙せ縺ｯ縺ゅｊ縺ｾ縺吶′縲∝ｾ馴㍼隱ｲ驥代↑縺ｮ縺ｧ
縲髻ｳ螢ｰ繧�判蜒上ｒ螟夂畑縺吶ｋ菴懷刀縺ｫ縺ｯ蜷代°縺ｪ縺輔◎縺�〒縺吮�隧ｦ縺励∪縺励◆��

繧ｻ繝ｼ繝悶せ繝ｭ繝�ヨ縺ｯ荳縺､縺ｧ縲√そ繝ｼ繝門ｮ溯｡梧凾縺ｫ荳頑嶌縺阪＆繧後∪縺吶�
縺ｧ縺吶�縺ｧ縲√そ繝ｼ繝悶ョ繝ｼ繧ｿ繧剃ｽｿ縺��縺代ｋ蠢�ｦ√�縺ｪ縺�ご繝ｼ繝�蜷代″縺ｧ縺吶�
縺｡縺ｪ縺ｿ縺ｫ縲∝�驛ｨ逧�↓縺ｯ蜿､縺�そ繝ｼ繝悶ョ繝ｼ繧ｿ繧�5縺､縺ｾ縺ｧ繧ｵ繝ｼ繝舌�縺ｫ谿九＠縺ｦ縺ゅｊ縲�
繧ｻ繝ｼ繝悶′螢翫ｌ縺ｦ縺�◆繧芽�蜍慕噪縺ｫ蜿､縺�ヵ繧｡繧､繝ｫ繧偵＆縺九�縺ｼ縺｣縺ｦ繝ｪ繝医Λ繧､縺励∪縺吶�

Firebase縺ｸ縺ｮ逋ｻ骭ｲ縺ｮ髫帙↓Google繧｢繧ｫ繧ｦ繝ｳ繝医′蠢�ｦ√〒縺吶�
縺輔ｉ縺ｫTwitter繧Ёacebook縺ｧ縺ｮ隱崎ｨｼ繧貞ｮ溽樟縺吶ｋ縺溘ａ縺ｫ
縺昴ｌ縺槭ｌ縺ｮ繧ｵ繝ｼ繝薙せ縺ｧ繧｢繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ逋ｻ骭ｲ縺ｨ縺�≧菴懈･ｭ繧偵☆繧句ｿ�ｦ√′縺ゅｊ縲�
縺昴�髫帙↓縲√＃閾ｪ霄ｫ縺ｮ繧｢繧ｫ繧ｦ繝ｳ繝医′蠢�ｦ√↓縺ｪ繧翫∪縺吶�

todo:
auth縺ｮ繧ｿ繧､繝�繝ｩ繧ｰ蟇ｾ蠢�
繝｡繝九Η繝ｼ縺ｮ縲後そ繝ｼ繝悶阪ｒ繧ゅ≧縺｡繧�▲縺ｨ隕ｪ蛻�↓縺吶ｋ

繝励Λ繧ｰ繧､繝ｳ繧ｳ繝槭Φ繝�
FirebaseSave : 荳頑嶌縺阪そ繝ｼ繝悶ｒ螳溯｡後＠縺ｾ縺吶�
繝ｦ繝ｼ繧ｶ繝ｼ縺後け繝ｩ繧ｦ繝峨そ繝ｼ繝悶ｒ驕ｸ謚槭＠縺ｦ縺�ｋ蝣ｴ蜷医�繧ｪ繝ｳ繝ｩ繧､繝ｳ縺ｮ繧ｻ繝ｼ繝悶ョ繝ｼ繧ｿ繧偵�
繝ｭ繝ｼ繧ｫ繝ｫ繧ｻ繝ｼ繝悶ｒ驕ｸ謚槭＠縺ｦ縺�ｋ蝣ｴ蜷医�繝ｭ繝ｼ繧ｫ繝ｫ縺ｮ繧ｻ繝ｼ繝悶ョ繝ｼ繧ｿ繧剃ｸ頑嶌縺阪＠縺ｾ縺吶�
�医う繝吶Φ繝医さ繝槭Φ繝峨〒縲後そ繝ｼ繝紋ｸ榊庄縲崎ｨｭ螳壹↓縺励※縺�ｋ縺ｨ縺阪�菴輔ｂ縺励∪縺帙ｓ��
縺薙ｌ繧偵ご繝ｼ繝�縺ｮ髫乗園縺ｧ螳溯｡後☆繧後�繧ｪ繝ｼ繝医そ繝ｼ繝悶′螳溽樟縺ｧ縺阪∪縺吶�

蛻ｩ逕ｨ隕冗ｴ�
縺碑�逕ｱ縺ｫ縲ゅけ繝ｬ繧ｸ繝�ヨ繧ゅ≠縺｣縺ｦ繧ゅ↑縺上※繧ゅ＞縺�〒縺吶よ隼騾�謾ｹ螟画ｭ楢ｿ弱�

縺ｨ縺薙ｍ縺ｧ縲√＆縺ｰ縺ｮ譁�喧蟷ｲ縺励▲縺ｦ縺翫＞縺励＞縺ｮ縺ｫ隧ｱ鬘後↓縺ｮ縺ｼ繧峨↑縺上※縺九ｏ縺�◎縺�□繧医�縲�

@param savedesc
@desc 繧ｪ繝ｳ繝ｩ繧､繝ｳ繧ｻ繝ｼ繝悶↓縺､縺�※縺ｮ隱ｬ譏取枚遶�縺ｧ縺吶よ隼陦後�&lt;br&gt;縺ｨ譖ｸ縺�※縺上□縺輔＞縲�
@default 繧ｽ繝ｼ繧ｷ繝｣繝ｫ繧｢繧ｫ繧ｦ繝ｳ繝医→騾｣謳ｺ縺吶ｋ縺ｨ<br>繧ｻ繝ｼ繝悶�繝舌ャ繧ｯ繧｢繝��縺後〒縺阪∪縺吶�<br>蜍晄焔縺ｫ謚慕ｨｿ縺吶ｋ縺薙→縺ｯ縺ゅｊ縺ｾ縺帙ｓ縲�

@param usetwitter
@desc Twitter繧｢繧ｫ繧ｦ繝ｳ繝医〒縺ｮ繧ｻ繝ｼ繝悶ｒ菴ｿ逕ｨ縺励∪縺吶°��
@type boolean
@on 菴ｿ逕ｨ縺吶ｋ
@off 菴ｿ逕ｨ縺励↑縺�
@default true

@param usefacebook
@desc Facebook繧｢繧ｫ繧ｦ繝ｳ繝医〒縺ｮ繧ｻ繝ｼ繝悶ｒ菴ｿ逕ｨ縺励∪縺吶°��
@type boolean
@on 菴ｿ逕ｨ縺吶ｋ
@off 菴ｿ逕ｨ縺励↑縺�
@default true

@param starttext
@desc 繧ｹ繧ｿ繝ｼ繝育判髱｢縺ｧ陦ｨ遉ｺ縺吶ｋ譁�ｭ励〒縺吶�
@default Press Start

@param startfont
@text 繧ｹ繧ｿ繝ｼ繝育判髱｢縺ｮ繝輔か繝ｳ繝域ュ蝣ｱ縺ｧ縺吶�
@type struct<startfont>
@default {"fontface": "", "size":"52", "bold":"false", "italic":"false", "color": " rgba(255,255,255,1.0)"}

@param startse
@text 繧ｹ繧ｿ繝ｼ繝医＠縺滓凾縺ｮ蜉ｹ譫憺浹縺ｮ諠��ｱ縺ｧ縺吶�
@type struct<startse>
@default {"name":"", "volume": "90", "pitch":"100", "pan":"0"}

@param firebaseconfig
@text Firebase謇螳壹�繧ｿ繧ｰ縺ｮ縺�■"config"縺ｧ蝗ｲ縺ｾ繧後◆邂�園縺ｮ諠��ｱ縺ｧ縺吶�
@type struct<firebaseconfig>

*/

/*~struct~startfont:
@param fontface
@desc 繝輔か繝ｳ繝亥錐遘ｰ縺ｧ縺吶ゆｻ悶→蜷後§繧ゅ�繧剃ｽｿ縺�→縺阪�遨ｺ谺�↓縺励※縺上□縺輔＞縲�

@param size
@desc 繝輔か繝ｳ繝医し繧､繧ｺ縺ｧ縺吶�
@default 52

@param bold
@desc 螟ｪ蟄励↓縺励∪縺吶°��
@type boolean
@on 螟ｪ蟄励↓縺吶ｋ
@off 螟ｪ蟄励↓縺励↑縺�
@default false

@param italic
@desc 譁應ｽ薙↓縺励∪縺吶°��
@type boolean
@on 譁應ｽ薙↓縺吶ｋ
@off 譁應ｽ薙↓縺励↑縺�
@default false

@param color
@desc 繝輔か繝ｳ繝医�濶ｲ縺ｧ縺吶�
*/

/*~struct~startse:
@param name
@desc 繝輔ぃ繧､繝ｫ蜷咲ｧｰ縺ｧ縺吶�
@type file
@dir /audio/se/

@param volume
@desc 繝懊Μ繝･繝ｼ繝�縺ｮ謨ｰ蛟､縺ｧ縺吶ゑｼ�0-100��
@type number
@min 0
@max 100
@default 90

@param pitch
@desc 繝斐ャ繝√�謨ｰ蛟､縺ｧ縺吶ゑｼ�50-150��
@type number
@min 50
@max 150
@default 100

@param pan
@desc 菴咲嶌�医ヱ繝ｳ�峨�謨ｰ蛟､縺ｧ縺吶ゑｼ�-100-100��
@type number
@min -100
@max 100
@default 100

*/

/*~struct~firebaseconfig:
@param apiKey
@param authDomain
@param databaseURL
@param projectId
@param storageBucket
@param messagingSenderId
*/

(function() {
  var pluginName = 'SNZ_FirebaseSave';
  //=============================================================================
  // 繝ｦ繝ｼ繧ｶ譖ｸ縺肴鋤縺磯�伜沺 - 邨ゆｺ� -
  //=============================================================================

    var FirebaseSave = {};
    FirebaseSave._readytopushstart = false;
    FirebaseSave._readytonewgame = false;
    FirebaseSave._uid = "";
    FirebaseSave._islocalsave = false;
    FirebaseSave._savedata = "";
    FirebaseSave._app = null;

  //-----------------------------------------------------------------------------
  // 繝代Λ繝｡繝ｼ繧ｿ繝ｼ縺ｮ蜿励￠蜿悶ｊ
  var pluginName = 'SNZ_FirebaseSave';
  var _Scene_Base_start = Scene_Base.prototype.start;
  Scene_Base.prototype.start = function() {
    _Scene_Base_start.call(this);

  var paramParse = function(obj) {
      return JSON.parse(JSON.stringify(obj, paramReplace), paramRevive);
  };

  var paramReplace = function(key, value) {
      try {
          return JSON.parse(value || null);
      } catch (e) {
          return value;
      }
  };

  var paramRevive = function(key, value) {
      try {
        return eval(value || value);
      } catch (e) {
        return value;
      }
  };

  var parameters = PluginManager.parameters(pluginName);
  param = paramParse(parameters);

}


  //-----------------------------------------------------------------------------
  // Game_Interpreter_pluginCommand

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'FirebaseSave') {
      if ($gameSystem._saveEnabled) {
        FirebaseSaveManager.prototype.startToSave();
      }
    }
  };


  //-----------------------------------------------------------------------------
  // Scene_Title

  function getvars() {
    var arg = new Object;
    var pair = location.search.substring(1).split('&');
    for (var i = 0; pair[i]; i++) {
      var kv = pair[i].split('=');
      arg[kv[0]] = kv[1];
    }
    return arg;
  }

  var _Scene_TitleCreate = Scene_Title.prototype.create;
  Scene_Title.prototype.create = function() {
    _Scene_TitleCreate.apply(this, arguments);
    this._commandWindow.setHandler('cancel', this.onCancelCommand.bind(this));
    this.createGameStartSprite();
    this.onCancelCommand();
  };

  var _Scene_TitleUpdate = Scene_Title.prototype.update;
  Scene_Title.prototype.update = function() {
    _Scene_TitleUpdate.apply(this, arguments);
    this.updateNewGameOnly();
  };

  Scene_Title.prototype.updateNewGameOnly = function() {
    if (this._commandWindowClose) {
      this._commandWindow.openness -= 64;
    }
    if (!this._seledted && this.isTriggered() && FirebaseSave._readytopushstart) {
      //繧ｹ繧ｿ繝ｼ繝医ｒ謚ｼ縺励◆譎ょｮ溯｡�
      this._gameStartSprite.visible = false;
      this._seledted = true;
      this.playStartSe();
      if (FirebaseSave._uid) {
        //繝ｭ繧ｰ繧､繝ｳ貂医∩縺ｮ蝣ｴ蜷�
        FirebaseSaveManager.prototype.fetchSavedTime();
      } else if (DataManager.isAnySavefileExists()) {
        //繝ｭ繝ｼ繧ｫ繝ｫ繧ｻ繝ｼ繝悶′縺ゅｋ蝣ｴ蜷医�繝ｭ繝ｼ繝臥判髱｢縺ｸ
        FirebaseSave._islocalsave = true;
        SceneManager.push(Scene_Load);
      } else {
        //繝九Η繝ｼ繧ｲ繝ｼ繝�
        SceneManager.push(Scene_Newgameoption);
      }

    }
    //隱崎ｨｼ縺ｯ螳御ｺ�＠縺ｦ縺�ｋ縺後そ繝ｼ繝悶ョ繝ｼ繧ｿ縺後↑縺�→縺搾ｼ亥�蝗橸ｼ�
    if (FirebaseSave._readytonewgame) {
      FirebaseSave._readytonewgame = false;
      this.commandNewGame();
    }
    if (this._loadcomplete) {
      this._loadcomplete = false;
      this.onLoadSuccess();
      $gameSystem.onAfterLoad();
    }
  };
  Scene_Title.prototype.onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
  Scene_Title.prototype.reloadMapIfUpdated = Scene_Load.prototype.reloadMapIfUpdated;

  Scene_Title.prototype.playStartSe = function() {
    var seName = param.startse.name;
    if (seName) {
      AudioManager.playSe(param.startse);
    } else {
      SoundManager.playOk();
    }
  };

  Scene_Title.prototype.onCancelCommand = function() {
    this._commandWindow.deactivate();
    this._seledted = false;
    this._gameStartSprite.visible = true;
    this._commandWindowClose = true;
    this._commandWindow.visible = false;
  };
  Scene_Title.prototype.createGameStartSprite = function() {
    this._gameStartSprite = new Sprite_GameStart();
    this._gameStartSprite.draw();
    this.addChild(this._gameStartSprite);
  };

  Scene_Title.prototype.isTriggered = function() {
    return Object.keys(Input.keyMapper).some(function(keyCode) {
        return Input.isTriggered(Input.keyMapper[keyCode]);
      }.bind(this)) ||
      Object.keys(Input.gamepadMapper).some(function(keyCode) {
        return Input.isTriggered(Input.gamepadMapper[keyCode]);
      }.bind(this)) || TouchInput.isTriggered();
  };

  //-----------------------------------------------------------------------------
  // Sprite_GameStart

  function Sprite_GameStart() {
    this.initialize.apply(this, arguments);
  }

  Sprite_GameStart.prototype = Object.create(Sprite_Base.prototype);
  Sprite_GameStart.prototype.constructor = Sprite_GameStart;

  Sprite_GameStart.prototype.initialize = function() {
    Sprite_Base.prototype.initialize.call(this);
    this.y = Graphics.height - 160;
    this.opacity_shift = -2;
  };

  Sprite_GameStart.prototype.draw = function() {
    var height = 40//param.startfont.size;
    var text = param.starttext;
    this.bitmap = new Bitmap(Graphics.width, height);
    //if (param.startfont.fontface) this.bitmap.fontFace = param.startfont.fontface;
    this.bitmap.fontSize = height;
    this.bitmap.fontItalic = false;
    this.bitmap.fontBold = false;
//    this.bitmap.textColor = rgba;
    this.bitmap.drawText(text, 0, 0, Graphics.width, height, 'center');
  };

  Sprite_GameStart.prototype.update = function() {
    if (FirebaseSave._readytopushstart) {
      if (this.opacity < 128) {
        this.opacity = 255;
      }
      this.opacity += this.opacity_shift;
      if (this.opacity <= 128 || this.opacity >= 255) this.opacity_shift *= -1;
    } else {
      this.opacity = 0;
    }
  };


  //-----------------------------------------------------------------------------
  // Scene_Newgameoption

  function Scene_Newgameoption() {
    this.initialize.apply(this, arguments);
  }

  Scene_Newgameoption.prototype = Object.create(Scene_MenuBase.prototype);
  Scene_Newgameoption.prototype.constructor = Scene_Newgameoption;

  Scene_Newgameoption.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
  };

  Scene_Newgameoption.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createHelpWindow();
  };
  Scene_Newgameoption.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_firebasenewgame();
    if(param.usetwitter){
      this._commandWindow.setHandler('twitterauth', this.commandTwitterauth.bind(this));
    }
    this._commandWindow.setHandler('googleauth', this.commandGoogleauth.bind(this));
    if(param.usefacebook){
      this._commandWindow.setHandler('facebookauth', this.commandFacebookauth.bind(this));
    }
    this._commandWindow.setHandler('noauth', this.commandNewGame.bind(this));
    this.addWindow(this._commandWindow);
  };
  Scene_Newgameoption.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_firebasenewgamehelp(0, 0, Graphics.width, 150);
    this.addWindow(this._helpWindow);
    this._helpWindow.drawmessage();
  }

  Scene_Newgameoption.prototype.commandTwitterauth = function() {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  Scene_Newgameoption.prototype.commandGoogleauth = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  Scene_Newgameoption.prototype.commandFacebookauth = function() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  Scene_Newgameoption.prototype.commandNewGame = function() {
    FirebaseSave._islocalsave = true;
    DataManager.setupNewGame();
    this._commandWindow.close();
    this.fadeOutAll();
    SceneManager.goto(Scene_Map);
  };

  Scene_Newgameoption.prototype.terminate = function() {
    Scene_Title.prototype.terminate.call(this);
  };


  //-----------------------------------------------------------------------------
  // Window_firebasenewgame

  function Window_firebasenewgame() {
    this.initialize.apply(this, arguments);
  }

  Window_firebasenewgame.prototype = Object.create(Window_Command.prototype);
  Window_firebasenewgame.prototype.constructor = Window_firebasenewgame;

  Window_firebasenewgame.prototype.windowWidth = function() {
    return 360;
  };
  Window_firebasenewgame.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.x = (Graphics.width - this.windowWidth()) / 2;
    this.y = 300;
  };

  Window_firebasenewgame.prototype.makeCommandList = function() {
    Window_Command.prototype.makeCommandList.call(this);
    this.addCommand('Twitter繧｢繧ｫ繧ｦ繝ｳ繝医→騾｣謳ｺ', 'twitterauth');
    this.addCommand('Google繧｢繧ｫ繧ｦ繝ｳ繝医→騾｣謳ｺ', 'googleauth');
    this.addCommand('Facebook繧｢繧ｫ繧ｦ繝ｳ繝医→騾｣謳ｺ', 'facebookauth');
    this.addCommand('縺薙�繝悶Λ繧ｦ繧ｶ縺ｧ縺�縺代そ繝ｼ繝�', 'noauth');
  };


  //-----------------------------------------------------------------------------
  // Window_firebasenewgamehelp

  function Window_firebasenewgamehelp() {
    this.initialize.apply(this, arguments);
  }

  Window_firebasenewgamehelp.prototype = Object.create(Window_Base.prototype);
  Window_firebasenewgamehelp.prototype.constructor = Window_firebasenewgamehelp;

  Window_firebasenewgamehelp.prototype.updatePadding = function() {
    this.padding = this.standardPadding() / 2;
  };
  Window_firebasenewgamehelp.prototype.drawmessage = function() {
    text = param.savedesc;
    text = text.replace(/<br>/g, '\n');
    this.drawTextEx(text, 10, 10);
  };


  //-----------------------------------------------------------------------------
  // Scene_Menu

  Scene_Menu.prototype.commandSave = function() {
    if (FirebaseSave._uid) {
      SceneManager.push(Scene_Firebasesave);
    } else {
      SceneManager.push(Scene_Save);
    }
  };


  //-----------------------------------------------------------------------------
  // Scene_Firebasesave

  function Scene_Firebasesave() {
    this.initialize.apply(this, arguments);
  }

  Scene_Firebasesave.prototype = Object.create(Scene_MenuBase.prototype);
  Scene_Firebasesave.prototype.constructor = Scene_Firebasesave;

  Scene_Firebasesave.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
  };

  Scene_Firebasesave.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
  };

  Scene_Firebasesave.prototype.terminate = function() {
    Scene_MenuBase.prototype.terminate.call(this);
  };

  Scene_Firebasesave.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_firebasesave();
    this._commandWindow.setHandler('confirmfirebasesave', this.commandSave.bind(this));
    this._commandWindow.setHandler('logout', this.commandLogout.bind(this));
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._commandWindow);
  };

  Scene_Firebasesave.prototype.commandSave = function() {
    FirebaseSaveManager.prototype.startToSave();
    this.popScene();
  };

  Scene_Firebasesave.prototype.commandLogout = function() {
    firebase.auth().signOut().then(function() {
      SceneManager.goto(Scene_Title);
    }).catch(function(error) {
      throw new Error(error);
    });
  };


  //-----------------------------------------------------------------------------
  // Window_firebasesave

  function Window_firebasesave() {
    this.initialize.apply(this, arguments);
  }

  Window_firebasesave.prototype = Object.create(Window_Command.prototype);
  Window_firebasesave.prototype.constructor = Window_firebasesave;

  Window_firebasesave.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 0, 0);
    this.x = 300;
    this.y = 300;

  };

  Window_firebasesave.prototype.makeCommandList = function() {
    Window_Command.prototype.makeCommandList.call(this);
    this.addCommand('繧ｻ繝ｼ繝�', 'confirmfirebasesave');
    this.addCommand('繝ｭ繧ｰ繧｢繧ｦ繝�', 'logout');
    this.addCommand('繧�ａ繧�', 'cancel');
  };


  //-----------------------------------------------------------------------------
  // DataManager

  DataManager.loadGameFromNetwork = function() {
    try {
      json = LZString.decompressFromBase64(FirebaseSave._savedata);
      this.createGameObjects();
      this.extractSaveContents(JsonEx.parse(json));
      this.selectSavefileForNewGame();
      return ('success');
    } catch (e) {
      return (e);
    }
  };


  //-----------------------------------------------------------------------------
  // Game_Temp_prototype_initialize

  var _Game_Temp_prototype_initialize = Game_Temp.prototype.initialize;
  Game_Temp.prototype.initialize = function() {
    _Game_Temp_prototype_initialize.call(this);
    if (this.isPlaytest()) {
      FirebaseSave._readytopushstart = true;
    } else {
      if (!FirebaseSave._app) {
        FirebaseSave._app = firebase.initializeApp(param.firebaseconfig);
      }
      firebase.auth().onAuthStateChanged(function(user) {
        FirebaseSave._readytopushstart = true;
        if (user) {
          FirebaseSave._uid = user.uid;
          FirebaseSaveManager.prototype.initConnection();
        } else {
          FirebaseSave._uid = "";
        }
      });
      firebase.auth().getRedirectResult().then(function(result) {
        FirebaseSave._readytopushstart = true;
        if (result.credential) {
          FirebaseSave._uid = result.user.uid;
          FirebaseSaveManager.prototype.initConnection();
        } else {
          FirebaseSave._uid = "";
        }
      }).catch(function(error) {
        throw new Error(error);
      });
    }
  }


  //-----------------------------------------------------------------------------
  // FirebaseSaveManager

  function FirebaseSaveManager() {
    throw new Error('this is static class.');
  }

  FirebaseSaveManager.prototype._loadcount = 0;
  FirebaseSaveManager.prototype._savedtimes = [];


  FirebaseSaveManager.prototype.initConnection = function() {
    if (!this._database) {
      this._database = firebase.database();
      this._storage = firebase.storage();
    }
  }

  FirebaseSaveManager.prototype.startToSave = function() {
    //繧ｻ繝ｼ繝紋ｸｭ陦ｨ險�
    $gameScreen.showPicture(3, "saving", 0, 10, 690, 100, 100, 255, 0);
    if (FirebaseSave._islocalsave) {
      //繝ｭ繝ｼ繧ｫ繝ｫ縺ｮ莠ｺ縺ｯ縺昴�縺ｾ縺ｾ荳頑嶌縺�
      var slotId = DataManager.lastAccessedSavefileId();
      $gameSystem.onBeforeSave();
      if (DataManager.saveGame(slotId)) {
        StorageManager.cleanBackup(slotId);
        $gameScreen.erasePicture(3);
      }
    } else {
      //險倬鹸縺吶ｋdate縺ｯ縲後そ繝ｼ繝悶さ繝槭Φ繝峨ｒ螳溯｡後＠縺溘肴凾轤ｹ縺ｨ縺励∪縺�
      var date = new Date();
      var time = date.getTime();
      //繧ｻ繝ｼ繝門�逅��髢句ｧ�
      $gameSystem.onBeforeSave();
      this.postSaveData(time);
    }
  };

  FirebaseSaveManager.prototype.fetchSavedTime = function() {
    //譛蠕後↓繧ｻ繝ｼ繝悶＠縺溘ち繧､繝�繧ｹ繧ｿ繝ｳ繝励ｒ蜿門ｾ励☆繧九螟ｱ謨励↓蛯吶∴5莉ｶ縺ｾ縺ｧ
    var userRef = this._database.ref('user/' + FirebaseSave._uid).limitToLast(5);
    userRef.once('value').then(function(snapshot) {
      var result = snapshot.val();
      if (result) {
        //繝ｭ繝ｼ繝�
        var arr = Object.keys(result).map(function(key) {
          return result[key]
        });
        FirebaseSaveManager.prototype._savedtimes = arr.reverse();
        FirebaseSaveManager.prototype.fetchSaveData();
      } else {
        //繧ｻ繝ｼ繝悶′縺ｾ縺�縺ｪ縺�→縺阪�繝九Η繝ｼ繧ｲ繝ｼ繝�
        FirebaseSave._readytonewgame = true;
      }
    });
  }

  FirebaseSaveManager.prototype.fetchSaveData = function() {
    //蜑榊屓繧ｻ繝ｼ繝匁凾縺ｮ繧ｿ繧､繝�繧ｹ繧ｿ繝ｳ繝励ｒ蜈�↓繧ｻ繝ｼ繝悶ョ繝ｼ繧ｿ繧貞叙蠕�
    var storageRef = this._storage.ref('user/' + FirebaseSave._uid + '/' + this._savedtimes[this._loadcount].time + '.rpgsave');
    storageRef.getDownloadURL().then(function(url) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'text';
      xhr.onload = function(event) {
        FirebaseSave._savedata = xhr.response;
        FirebaseSaveManager.prototype.loadSaveData();
      };
      xhr.open('GET', url);
      xhr.send();
    }).catch(function(error) {
      //5蝗槭∪縺ｧ繝��繧ｿ繧帝■縺｣縺ｦ繧�ｊ逶ｴ縺�
      FirebaseSaveManager.prototype._loadcount++;
      if (FirebaseSaveManager.prototype._loadcount < 5) {
        FirebaseSaveManager.prototype.fetchSaveData();
      } else {
        throw new Error('繧ｻ繝ｼ繝悶ョ繝ｼ繧ｿ縺ｮ繝ｭ繝ｼ繝峨↓螟ｱ謨励＠縺ｾ縺励◆縲�');
      }
    });


  }

  FirebaseSaveManager.prototype.loadSaveData = function() {
    //蜿門ｾ励＠縺溘そ繝ｼ繝悶ョ繝ｼ繧ｿ縺ｧ繧ｲ繝ｼ繝�繧定ｵｷ蜍輔☆繧具ｼ�DataManager縺ｫ貂｡縺呻ｼ�
    var result = DataManager.loadGameFromNetwork();
    if (result === 'success') {
      this._loadcount = 0;
      Scene_Title.prototype._loadcomplete = true;
    } else {
      //5蝗槭∪縺ｧ繝��繧ｿ繧帝■縺｣縺ｦ繧�ｊ逶ｴ縺�
      this._loadcount++;
      if (this._loadcount < 5) {
        this.loadSaveData();
      } else {
        throw new Error('繧ｻ繝ｼ繝悶ョ繝ｼ繧ｿ縺ｮ繝ｭ繝ｼ繝峨↓螟ｱ謨励＠縺ｾ縺励◆縲�');
      }
    }
  }

  FirebaseSaveManager.prototype.postSaveData = function(time) {
    var savedata = JsonEx.stringify(DataManager.makeSaveContents());
    var compressedsavedata = LZString.compressToBase64(savedata);
    var file = new Blob([compressedsavedata], {
      type: "text/plain"
    });
    var metadata = {
      contentType: 'text/plain'
    };
    if (!this._storageRef) {
      this._storageRef = firebase.storage().ref();
    }
    if (!FirebaseSave._uid) {
      FirebaseSave._uid = firebase.auth().currentUser.uid;
    }
    var uploadTask = this._storageRef.child('user/' + FirebaseSave._uid + '/' + time + '.rpgsave').put(file, metadata);
    uploadTask._time = time;
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      function(snapshot) {},
      function(error) {
        console.log(error);
        console.log('繧ｪ繝ｳ繝ｩ繧､繝ｳ繧ｻ繝ｼ繝悶↓螟ｱ謨励＠縺ｾ縺励◆縲ゅご繝ｼ繝�縺ｯ邯夊｡後＠縺ｾ縺吶�');
      },
      function() {
        //謌仙粥縺励◆繧峨ち繧､繝�繧ｹ繧ｿ繝ｳ繝励ｒ險倬鹸
        FirebaseSaveManager.prototype.postSavedTime(uploadTask._time);
        //蜿､縺�そ繝ｼ繝悶ｒ豸医☆
        FirebaseSaveManager.prototype.deleteOldSave();
      });
  }
  FirebaseSaveManager.prototype.postSavedTime = function(time) {
    //驟榊�縺ｫ險倬鹸
    this._savedtimes.unshift(time);
    //db縺ｫ險倬鹸
    var myref = this._database.ref('user/' + FirebaseSave._uid);
    var newPostKey = myref.push().key;
    var updates = {};
    updates[newPostKey] = {
      time: time
    };
    myref.update(updates);
  }

  FirebaseSaveManager.prototype.deleteOldSave = function() {
    //6縺謎ｻ･荳翫そ繝ｼ繝悶ョ繝ｼ繧ｿ縺梧ｺ懊∪縺｣縺ｦ縺�◆繧牙ｮ溯｡�
    if (this._savedtimes[5]) {
      //驟榊�縺ｮ譛ｫ蟆ｾ縺ｮ繧ｻ繝ｼ繝悶ョ繝ｼ繧ｿ繧呈ｶ医☆
      var storageRef = this._storage.ref('user/' + FirebaseSave._uid + '/' + this._savedtimes[this._savedtimes.length - 1].time + '.rpgsave');
      storageRef.delete().then(function() {
        console.log('蜿､縺�そ繝ｼ繝悶ョ繝ｼ繧ｿ繧貞炎髯､縺励∪縺励◆縲�');
        $gameScreen.erasePicture(3);
      }).catch(function(error) {
        console.log(error);
        console.log('蜿､縺�そ繝ｼ繝悶ョ繝ｼ繧ｿ縺ｮ蜑企勁縺ｫ螟ｱ謨励＠縺ｾ縺励◆縲ゅご繝ｼ繝�縺ｯ邯夊｡後＠縺ｾ縺吶�');
        $gameScreen.erasePicture(3);
      });
      //驟榊�縺九ｉ繧よｶ医☆
      this._savedtimes.pop();
    } else {
      $gameScreen.erasePicture(3);
    }
  }

})();