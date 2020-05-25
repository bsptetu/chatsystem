//=============================================================================
// SV_StateOverlay_Extend.js
//=============================================================================

/*:
 * @plugindesc SVの重ね合わせを拡張します。
 * @author 村人C
 *
 * @help
 *
 * 使い方
 * ステートの「メモ欄」に記述します。
 * <sv_overlay:11>
 * 重ね合わせしたい番号
 * ＭＶのデフォルトで１～１０は埋まっています。
 *
 * 画像ファイル
 * 「img」 => 「system」 => 「States.png」にアニメーションを追加して下さい。
 *
 *
 * readmeやスタッフロールの明記、使用報告は任意
 * 
 */

(function() {
	// SV モーション検索
	var _Game_BattlerBase_stateMotionIndex_SV_Extend = Game_BattlerBase.prototype.stateMotionIndex;
	Game_BattlerBase.prototype.stateMotionIndex = function() {
		var states = this.states();
		if (states.length > 0) {
			if (states[0].meta.sv_overlay != undefined) {
				return states[0].motion;
			}
		}
		return _Game_BattlerBase_stateMotionIndex_SV_Extend.call(this);
	};
	// SV 重ね合わせの検索
	var _Game_BattlerBase_stateOverlayIndex_SV_Extend = Game_BattlerBase.prototype.stateOverlayIndex;
	Game_BattlerBase.prototype.stateOverlayIndex = function() {
		var states = this.states();
		if (states.length > 0) {
			if (states[0].meta.sv_overlay != undefined) {
				return Number(states[0].meta.sv_overlay);
			}
		}
		return _Game_BattlerBase_stateOverlayIndex_SV_Extend.call(this);
	};
})();