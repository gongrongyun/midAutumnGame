var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 场景控制类
 */
var SceneControl = (function (_super) {
    __extends(SceneControl, _super);
    function SceneControl() {
        var _this = _super.call(this) || this;
        _this.openScene = new OpeningSceneLayer();
        _this.menuScene = new MenuSceneLayer();
        _this.gameScene = new GameSceneLayer();
        return _this;
    }
    Object.defineProperty(SceneControl, "init", {
        get: function () {
            if (!this.sceneControl) {
                this.sceneControl = new SceneControl();
            }
            return this.sceneControl;
        },
        enumerable: true,
        configurable: true
    });
    SceneControl.prototype.setStageHandler = function (stage) {
        this.currentStage = stage;
    };
    SceneControl.prototype.setOpeningScene = function () {
        this.currentStage.addChild(this.openScene);
    };
    SceneControl.prototype.setMenuScene = function () {
        this.currentStage.addChild(this.menuScene);
    };
    return SceneControl;
}(egret.Sprite));
__reflect(SceneControl.prototype, "SceneControl");
