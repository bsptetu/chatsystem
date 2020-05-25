// KRD_AutoBattle.js
//
// Copyright (c) 2020 KRD_DATA (くろうど)
// This plugin is released under the MIT License.
// https://opensource.org/licenses/mit-license.php

(function() {
//================================================
// Party Command Auto Enter Timer

//var KRD_Scene_Battle_createactorCommandWindow = Scene_Battle.prototype.createactorCommandWindow;
//Scene_Battle.prototype.createactorCommandWindow = function() {
//    KRD_Scene_Battle_createactorCommandWindow.call(this);
//    this._oldTime = Date.now();
//    this._oldTurn = $gameTroop.turnCount();
//};

var KRD_Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
    KRD_Scene_Battle_update.call(this);
$gameMessage.add("タイマーが起動してないよ。")
    if (this._actorCommandWindow.active) {
    var timerIsWorking = $gameTimer.isWorking() //タイマーが動いているか判定
    var sec = $gameTimer.seconds() //秒数を取得、secという変数に代入
        if (timerIsWorking && sec == 0) {
            this.commandactorAutoBattle();
            this._actorCommandWindow.deactivate();
            this._oldTime = null;
$gameMessage.add("タイマーが起動してないよ。")
        }
    }
};

var KRD_Scene_Battle_StartactorCommandSelection = Scene_Battle.prototype.startactorCommandSelection;
Scene_Battle.prototype.startactorCommandSelection = function() {
    KRD_Scene_Battle_StartactorCommandSelection.call(this);
};

