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
var SceneControl = (function (_super) {
    __extends(SceneControl, _super);
    function SceneControl() {
        var _this = _super.call(this) || this;
        _this.GameScene = new GameScene();
        _this.OpenScene = new OpenScene();
        _this.MenuScene = new MenuScene();
        return _this;
    }
    Object.defineProperty(SceneControl, "init", {
        get: function () {
            if (!this.SceneControl) {
                this.SceneControl = new SceneControl();
            }
            return this.SceneControl;
        },
        enumerable: true,
        configurable: true
    });
    SceneControl.prototype.setStageHandler = function (stage) {
        this.currentScene = stage;
    };
    SceneControl.prototype.setGameScene = function () {
        this.currentScene.removeChildren();
        this.currentScene.addChild(this.GameScene);
    };
    SceneControl.prototype.setMenuScene = function () {
        this.currentScene.removeChildren();
        this.currentScene.addChild(this.MenuScene);
    };
    SceneControl.prototype.setOpenScene = function () {
        var _this = this;
        this.currentScene.removeChildren();
        this.currentScene.addChild(this.OpenScene);
        egret.Tween.get(this.currentScene)
            .wait(2000)
            .call(function () {
            _this.setMenuScene();
        });
    };
    return SceneControl;
}(egret.Sprite));
__reflect(SceneControl.prototype, "SceneControl");
