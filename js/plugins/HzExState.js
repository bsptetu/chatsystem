/*:
 * @plugindesc �X�e�[�g�̊g���i�X�e�[�g�������ɕʂ̃X�e�[�g�������t�^�Ȃǁj���s���܂��B
 * @author hiz
 * 
 * @help
 *  �X�e�[�g�̃����ɋL�q��ǉ����邱�ƂŁA�X�e�[�g�̊g�����s���܂��B
 *  �s����g���͈ȉ��̒ʂ�ł��B
 *  �@�E�X�e�[�g���^�[����/����/�_���[�W�Ŏ����������ꂽ�ہA�ʂ̃X�e�[�g��t�^
 *  �@�E�A�C�e�����̓X�L���ɂ���ăX�e�[�g���������ꂽ�ہA�ʂ̃X�e�[�g��t�^
 *  �@�E���̃X�e�[�g���t�^���ꂽ�ہA�ʂ̃X�e�[�g�ɕς��
 *  �@�E�S�񕜁E�퓬�s�\���ɁA�X�e�[�g���������Ȃ��B
 * 
 * �X�e�[�g����:
 * <hzExState_auto:[nextStateId]>             # �X�e�[�g���^�[����/����/�_���[�W�Ŏ����������ꂽ�ہAID[nextStateId]�̃X�e�[�g��t�^
 * <hzExState_item:[nextStateId]>             # �A�C�e�����̓X�L���ɂ���ăX�e�[�g���������ꂽ�ہAID[nextStateId]�̃X�e�[�g��t�^
 * <hzExState_stack:[stateId],[nextStateId]>  # ���̃X�e�[�g[stateID]���t�^���ꂽ�ہA�X�e�[�g[nextStateId]�ɕς��
 *                                            # �� �X�e�[�g[stateID]�͉��������
 * <hzExState_remain>                         # �S�񕜁E�퓬�s�\���ɁA�X�e�[�g���������Ȃ��B
 *                                            # �� ���������A�A�C�e���E�X�L���ɂ������͉\�ł��B
 * 
 * ��j
 * <hzExState_auto:10>                  # �X�e�[�g���^�[����/����/�_���[�W�Ŏ����������ꂽ�ہAID10�̃X�e�[�g��t�^
 *                                      # ��j�a�C�̃X�e�[�g������Ŏ�����������悤�ɐݒ肵�A
 *                                      # �@�@�����̍ۂɏd�a�̃X�e�[�g��t�^����悤�ɐݒ肷��΁A
 *                                      #    �����ň�������X�e�[�g�������ł��܂��B
 *                                      
 * <hzExState_item:12>                  # �A�C�e�����̓X�L���ɂ���ăX�e�[�g���������ꂽ�ہAID12�̃X�e�[�g��t�^
 *                                      # ��j�d�a�̃X�e�[�g���X�L���ŉ񕜂���ƕa�C�̃X�e�[�g���t�^�����悤�ɐݒ肷��΁A
 *                                      #    ������̉񕜂��K�v�ȃX�e�[�g�������ł��܂��B
 *                                      
 * <hzExState_stack:10, 11>             # ID10�̃X�e�[�g���t�^���ꂽ�ہAID11�̃X�e�[�g��t�^�B
 *                                      # ��j�U���͏㏸�̃X�e�[�g(ID:10)���t�^���ꂽ�L�����ɍX�ɍU���͏㏸�̃X�e�[�g���d�˂��
 *                                      #    �U���͒��㏸�̃X�e�[�g(ID:11)���t�^�����ȂǁA�X�^�b�N�����X�e�[�g�������ł��܂��B 
 *                                      #    �� �U���͒��㏸�̃X�e�[�g���t�^���ꂽ�L�����ɍU���͏㏸�̃X�e�[�g���d���ł��Ȃ��悤�ɂ���ɂ́A
 *                                      #      �U���͒��㏸�̃X�e�[�g�̃����ɂ��A<hzExState_stack:10, 11>���L�ڂ��ĉ������B
 *                                      
 * <hzExState_remain>                   # �S�񕜁E�퓬�s�\���ɁA�X�e�[�g���������Ȃ��B
 *                                      # ��j�􂢂ȂǁA�h���ŉ񕜂ł��Ȃ��X�e�[�g�������ł��܂��B
 *                                      #    �܂��A�L���ȃX�e�[�g��S�񕜎��ɉ��������������ꍇ�ɂ����p�ł��܂��B
 */

(function() {
    
    var hzRemoveStateType = '';
    
    var _Game_Battler_addState = Game_Battler.prototype.addState;
    var _Game_Battler_removeState = Game_Battler.prototype.removeState;
    
    // �X�e�[�g�ǉ�����
    Game_Battler.prototype.addState = function(stateId) {
        var added = this.isStateAddable(stateId);
        var stackStates;
        if(added) {
            // �֘A����X�^�b�N�ݒ�����X�e�[�g�̗L�����`�F�b�N
            stackStates = this._states.filter(function(id) {
                if($dataStates[id].meta.hzExState_stack !== undefined) {
                    var stackParms = $dataStates[id].meta.hzExState_stack.split(",");
                    return stateId === Number(stackParms[0]);
                }
                return false;
            });
        }
        _Game_Battler_addState.call(this, stateId);
        if(added) {
             // �X�^�b�N�����i�ύX��̃X�e�[�g�t�^���b�Z�[�W�̂ݕ\���j
            if(stackStates.length !== 0) {
                var self = this;
                var nextStates = [];
                // �X�e�[�g�t�^�̃��b�Z�[�W���폜
                this._result.addedStates = this._result.addedStates.filter(function(elm) {
                    return elm !== stateId;
                });
                
                // �֘A�X�^�b�N�ݒ�����X�e�[�g������ꍇ
                stackStates.forEach(function(id) {
                    // �X�^�b�N�ݒ�����X�e�[�g���������A���̃X�e�[�g��t�^
                    var stackParms = $dataStates[id].meta.hzExState_stack.split(",");
                    var nextStateId = Number(stackParms[1]);
                    if(id === nextStateId) return;
                    _Game_Battler_removeState.call(self, id);
                    // �X�e�[�g�����̃��b�Z�[�W���폜
                    self._result.removedStates = self._result.removedStates.filter(function(elm) {
                        return elm !== id;
                    });
                    _Game_Battler_addState.call(self, nextStateId);
                    if(stateId === nextStateId) {
                        // �X�e�[�g�t�^�̃��b�Z�[�W���폜
                        self._result.addedStates = self._result.addedStates.filter(function(elm) {
                            return elm !== stateId;
                        });
                    }
                });
                // �ǉ������X�e�[�g������
                _Game_Battler_removeState.call(this, stateId);
                // �X�e�[�g�����̃��b�Z�[�W���폜
                this._result.removedStates = this._result.removedStates.filter(function(elm) {
                    return elm !== stateId;
                });
            }
        }
    };
    
    // �X�e�[�g��������
    Game_Battler.prototype.removeState = function(stateId) {
        var affected = this.isStateAffected(stateId);
        // �X�e�[�g�������s
        _Game_Battler_removeState.call(this, stateId);
        if(affected) {
            if(hzRemoveStateType === 'item') {
                // �A�C�e���E�X�L���ɂ������i�X�e�[�g�������b�Z�[�W�̂ݕ\���j
                var nextState  = $dataStates[stateId].meta.hzExState_item;
                if(nextState !== undefined) {
                    var nextStateId = Number(nextState);
                     // ���̃X�e�[�g��t�^
                     this.addState(nextStateId);
                     // �X�e�[�g�t�^�̃��b�Z�[�W���폜
                    this._result.addedStates = this._result.addedStates.filter(function(elm) {
                        return elm !== nextStateId;
                    });
                }
            } else if(hzRemoveStateType === 'auto') {
                // �^�[����/����/�_���[�W�Ŏ��������i�X�e�[�g�t�^���b�Z�[�W�̂ݕ\���j
                var nextState  = $dataStates[stateId].meta.hzExState_auto;
                if(nextState !== undefined) {
                    // �X�e�[�g�����̃��b�Z�[�W���폜
                    this._result.removedStates = this._result.removedStates.filter(function(elm) {
                        return elm !== stateId;
                    });
                    var nextStateId = Number(nextState);
                     // ���̃X�e�[�g��t�^
                     this.addState(nextStateId);
                }
            }
        }
    };
    
    // �X�e�[�g����������(Game_BattlerBase)
    var _Game_BattlerBase_clearStates = Game_BattlerBase.prototype.clearStates;
    Game_BattlerBase.prototype.clearStates = function() {
        if(hzRemoveStateType !== 'recoverAll' && hzRemoveStateType !== 'die') {
            _Game_BattlerBase_clearStates.call(this);
        } else {
            // �S�񕜁E�퓬�s�\���ɁA<hzExState_remain>���w�肳�ꂽ�X�e�[�g���������Ȃ��B
            this._states = this._states.filter(function(id) {
                return $dataStates[id].meta.hzExState_remain;
            });
            var tmpStateTurns = {};
            for(var i=0;i<this._states.length;i++) {
                tmpStateTurns[this._states[i]] = this._stateTurns[this._states[i]];
            }
            this._stateTurns = tmpStateTurns;
        }
    };
    
    // �X�e�[�g����������(Game_Actor)
    var _Game_Actor_clearStates = Game_Actor.prototype.clearStates;
    Game_Actor.prototype.clearStates = function() {
        Game_Battler.prototype.clearStates.call(this);
        if(hzRemoveStateType !== 'recoverAll') {
            this._stateSteps = {};
        } else {
            // �S�񕜁E�퓬�s�\���ɁA<hzExState_remain>���w�肳�ꂽ�X�e�[�g���������Ȃ��B�i�����܂ł̕����������p���j
            var tmpStateSteps = {};
            for(var i=0;i<this._states.length;i++) {
                tmpStateSteps[this._states[i]] = this._stateSteps[this._states[i]];
            }
            this._stateSteps = tmpStateSteps;
        }
    };
    
    // �A�C�e���E�X�L���ɂ��X�e�[�g����
    var _Game_Action_itemEffectRemoveState = Game_Action.prototype.itemEffectRemoveState;
    Game_Action.prototype.itemEffectRemoveState = function(target, effect) {
        // �X�e�[�g�����^�C�v�F�A�C�e���i�X�L���j
        hzRemoveStateType = 'item';
        // �������s
        _Game_Action_itemEffectRemoveState.call(this, target, effect);
        // �X�e�[�g�����^�C�v������
        hzRemoveStateType = '';
    };
    
    // �^�[�����ɂ��X�e�[�g�̎�������
    var _Game_Battler_removeStatesAuto = Game_Battler.prototype.removeStatesAuto;
    Game_Battler.prototype.removeStatesAuto = function(timing) {
        // �X�e�[�g�����^�C�v�F��������
        hzRemoveStateType = 'auto';
        // �������s
        _Game_Battler_removeStatesAuto.call(this, timing);
        // �X�e�[�g�����^�C�v������
        hzRemoveStateType = '';
    };
    
    // �_���[�W�ɂ��X�e�[�g�̎�������
    var _Game_Battler_removeStatesByDamage = Game_Battler.prototype.removeStatesByDamage;
    Game_Battler.prototype.removeStatesByDamage = function() {
        // �X�e�[�g�����^�C�v�F��������
        hzRemoveStateType = 'auto';
        // �������s
        _Game_Battler_removeStatesByDamage.call(this);
        // �X�e�[�g�����^�C�v������
        hzRemoveStateType = '';
    };
    
    // �����ɂ��X�e�[�g�̍X�V
    var _Game_Actor_updateStateSteps = Game_Actor.prototype.updateStateSteps;
    Game_Actor.prototype.updateStateSteps = function(state) {
        // �X�e�[�g�����^�C�v�F��������
        hzRemoveStateType = 'auto';
        // �������s
        _Game_Actor_updateStateSteps.call(this, state);
        // �X�e�[�g�����^�C�v������
        hzRemoveStateType = '';
    };
    
    // �S��
    var _Game_Interpreter_command314 = Game_Interpreter.prototype.command314;
    Game_Interpreter.prototype.command314 = function() {
        // �X�e�[�g�����^�C�v�F�S��
        hzRemoveStateType = 'recoverAll';
        // �������s
        var result = _Game_Interpreter_command314.call(this);
        // �X�e�[�g�����^�C�v������
        hzRemoveStateType = '';
        return result;
    };
    
    // �G�L�����̑S��
    var _Game_Interpreter_command334 = Game_Interpreter.prototype.command334;
    Game_Interpreter.prototype.command334 = function() {
        // �X�e�[�g�����^�C�v�F�S��
        hzRemoveStateType = 'recoverAll';
        // �������s
        var result = _Game_Interpreter_command334.call(this);
        // �X�e�[�g�����^�C�v������
        hzRemoveStateType = '';
        return result;
    };
    
    // �퓬�s�\
    var _Game_BattlerBase_die = Game_BattlerBase.prototype.die;
    Game_BattlerBase.prototype.die = function() {
        // �X�e�[�g�����^�C�v�F�퓬�s�\
        hzRemoveStateType = 'die';
        // �������s
        _Game_BattlerBase_die.call(this);
        // �X�e�[�g�����^�C�v������
        hzRemoveStateType = '';
    };
    
    // �A�C�e���E�X�L���g�p�۔���
    var _Game_Action_testItemEffect = Game_Action.prototype.testItemEffect;
    Game_Action.prototype.testItemEffect = function(target, effect) {
        // �X�^�b�N�X�e�[�g�̏ꍇ�A���ɃX�e�[�g�t�^�ς݂ł��X�e�[�g�̒ǉ����ł���悤��
        if(effect.code === Game_Action.EFFECT_ADD_STATE) {
            if(!target.isStateAffected(effect.dataId)) return true;
            if($dataStates[effect.dataId].meta.hzExState_stack !== undefined) {
                var stackParms = $dataStates[effect.dataId].meta.hzExState_stack.split(",");
                return effect.dataId === Number(stackParms[0]);
            }
        }
        return _Game_Action_testItemEffect.call(this, target, effect);
    };
})();