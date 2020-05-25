//=============================================================================
// SA_FPSMeter_Customizer.js
// ----------------------------------------------------------------------------
// Created by seea
// License: MIT License  https://opensource.org/licenses/mit-license.php
//
// Plugin author:
//  Contact: https://nekono.org
//=============================================================================
// History
// 18.0 2018/01/30 Initial release.
// 18.1 2018/03/16 Added availableFPS and getFPS functions.
// 18.2 2018/04/29 Added Mini Transparent theme. It possible to select theme by parameter.
//=============================================================================
// 更新履歴
// 18.0 2018/01/30 初版
// 18.1 2018/03/16 FPSMeterの利用可否を返すavailableFPS関数、FPSの数値を返すgetFPS関数を追加しました。
// 18.2 2018/04/29 Mini Transparent themeを追加。パラメータでテーマを選択できるようにしました。

/*:
 * ==============================================================================
 * @plugindesc v18.2 SA FPSMeter Customizer
 * @author seea
 * @require rpg_core.js v1.5.1 or v1.6.0
 *
 * @help
 * SA FPSMeter Customizer -- FPS表示をカスタマイズします
 *
 * 必須 - rpg_core.js v1.5.1 or v1.6.0
 *
 *
 * 他のプラグインから Graphics.getFPS() を使用して、現在のFPS値を取得できます。
 * 何らかの理由で FPSMeter が利用不可の場合は null が返されます。
 *
 * MVでは、FPSの表示、非表示にかかわらず FPSMeter は常に動いている仕様のため、
 * FPSMeter が利用不可というのは通常は起こり得ませんが、受け取り側では
 * 念のため null の判定を行ってください。
 *
 *
 * @param Theme number
 * @desc 1:Default plus  2:Mini
 * 既定値:1
 * @default 1
 * @type number
 */

var Imported = Imported || {};
Imported.SA_FPSMeter_Customizer = true;

//-----------------------------------------------------------------------------
(function() {
'use strict';

	// Get parameters
	var params = PluginManager.parameters('SA_FPSMeter_Customizer');
	const paramThemeNumber = Number(params['Theme number'] || 1);

	// Mini Transparent theme - based Transparent theme
	FPSMeter.theme.mini_transparent = FPSMeter.extend({}, FPSMeter.theme.base, {
		heatmaps: [{
			saturation: 0.8,
			lightness: 0.5
		}],
		container: {
			padding: 0,
			color: '#fff',
			textShadow: '1px 1px 0 rgba(0,0,0,.5)'
		},
		count: {
			padding: '0 5px',
			height: '21px',
			lineHeight: '20px'
		},
		legend: {
			padding: '0 5px',
			height: '21px',
			lineHeight: '22px'
		},
		graph: {
			height: '21px'
		},
		column: {
			width: 5,
			background: '#999',
			heatOn: 'backgroundColor',
			opacity: 0.5
		}
	});

	/**
	 * @static
	 * @method _createFPSMeter
	 * @private
	 */
	Graphics._createFPSMeter = function() {
		var themeName;
		if (paramThemeNumber === 1) {
			themeName = 'transparent';
		} else if (paramThemeNumber === 2) {
			themeName = 'mini_transparent';
		} else {
			// Unknown parameter value
			themeName = 'transparent';
		}
		var options = { graph: 1, theme: themeName, toggleOn: null, interval: 500, threshold: 500, decimals: 1 };
		this._fpsMeter = new FPSMeter(options);
		this._fpsMeter.hide();
	};

	if (paramThemeNumber === 2) {
		/**
		 * @static
		 * @method _createModeBox
		 * @private
		 */
		Graphics._createModeBox = function() {
			var box = document.createElement('div');
			box.id = 'modeTextBack';
			box.style.position = 'absolute';
			box.style.left = '5px';
			box.style.top = '5px';
			box.style.width = '200px';
			box.style.height = '21px';
			box.style.background = 'rgba(0,0,0,0.2)';
			box.style.zIndex = 9;
			box.style.opacity = 0;

			var text = document.createElement('div');
			text.id = 'modeText';
			text.style.position = 'absolute';
			text.style.left = '120px';
			text.style.top = '5px';
			text.style.width = '80px';
			text.style.fontSize = '12px';
			text.style.fontFamily = 'monospace';
			text.style.color = 'white';
			text.style.textAlign = 'center';
			text.style.textShadow = '1px 1px 0 rgba(0,0,0,0.5)';
			text.innerHTML = this.isWebGL() ? 'WebGL mode' : 'Canvas mode';

			document.body.appendChild(box);
			box.appendChild(text);

			this._modeBox = box;
		};
	}

	//-----------------------------------------------------------------------------
	// Game_Map
	//

	/**
	 * @method availableFPS
	 * @return Return true if FPSMeter available, otherwise false
	 */
	Game_Map.prototype.availableFPS = function() {
		if (Graphics._fpsMeter && typeof Graphics._fpsMeter.fps !== 'undefined') {
			return true;
		} else {
			return false;
		}
	};

	/**
	 * @method getFPS
	 * @return Return current FPS (Return null if not available)
	 */
	Game_Map.prototype.getFPS = function() {
		if (this.availableFPS()) {
			return Graphics._fpsMeter.fps;
		} else {
			return null;
		}
	};

})();
