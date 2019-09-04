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
var OpenScene = (function (_super) {
    __extends(OpenScene, _super);
    function OpenScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.start, _this);
        _this.width = Param.StageWidth;
        _this.height = Param.StageHeight;
        _this.bg = new egret.Shape();
        _this.logo = Help.createBitmapByName("qkteam_png");
        _this.text = new egret.TextField();
        return _this;
    }
    OpenScene.prototype.start = function () {
        this.addBackground();
        this.addLogo();
        this.addText();
        var logoTw = egret.Tween.get(this.logo);
        logoTw.to({ alpha: 0 }, 2000);
        var textTw = egret.Tween.get(this.text);
        textTw.to({ alpha: 0 }, 2000);
    };
    OpenScene.prototype.addLogo = function () {
        this.logo.x = this.width / 2 - 100;
        this.logo.y = 400;
        this.logo.width = 200;
        this.logo.height = 200;
        this.addChild(this.logo);
    };
    OpenScene.prototype.addBackground = function () {
        this.bg.graphics.beginFill(0x000000, 1);
        this.bg.graphics.drawRect(0, 0, this.width, this.height);
        this.bg.graphics.endFill();
        this.addChild(this.bg);
    };
    OpenScene.prototype.addText = function () {
        this.text.text = "晴空工作室";
        this.text.size = 50;
        this.text.width = 250;
        this.text.height = 100;
        this.text.y = 650;
        this.text.x = this.width / 2 - 125;
        this.addChild(this.text);
    };
    return OpenScene;
}(egret.DisplayObjectContainer));
__reflect(OpenScene.prototype, "OpenScene");
