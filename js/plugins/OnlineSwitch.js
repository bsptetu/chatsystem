OnlineManager.goOffline = function () {
  firebase.database().goOffline();
};

OnlineManager.goOnline = function () {
  firebase.database().goOnline();
};

const offlineSwitch = 417; // プラグインパラメータ化するなり何なりご自由に
const _Game_Switches_setValue = Game_Switches.prototype.setValue;
Game_Switches.prototype.setValue = function (switchId, value, byOnline) {
  _Game_Switches_setValue.call(this, switchId, value, byOnline);
  if (switchId === offlieSwitch) {
    if (value) {
      OnlineManager.goOffline();
    } else {
      OnlineManager.goOnline();
    }
  }
};