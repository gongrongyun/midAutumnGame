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
var MenuScene = (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        var _this = _super.call(this) || this;
        _this.startButton = Help.createBitmapByName("startUp_png");
        _this.menuButton = Help.createBitmapByName("menuUp_png");
        _this.exitButton = Help.createBitmapByName("exitUp_png");
        _this.bg = new egret.Shape();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    MenuScene.prototype.init = function () {
        this.bg.graphics.beginFill(0x000000, 1);
        this.bg.graphics.drawRect(0, 0, Param.StageWidth, Param.StageHeight);
        this.bg.graphics.endFill();
        this.addChild(this.bg);
        this.addButton(this.startButton, 400, "startUp_png", "startDown_png", this.clickStart);
        this.addButton(this.menuButton, 550, "menuUp_png", "menuDown_png", this.clickMenu);
        this.addButton(this.exitButton, 700, "exitUp_png", "exitDown_png", this.clickExit);
    };
    MenuScene.prototype.clickStart = function () {
        SceneControl.init.setGameScene();
        console.log("ok");
    };
    MenuScene.prototype.clickMenu = function () {
        console.log("menu");
    };
    MenuScene.prototype.clickExit = function () {
        console.log("exit");
    };
    MenuScene.prototype.addButton = function (button, y, up, down, clickDown) {
        button.x = Param.StageWidth / 2 - 150;
        button.y = y;
        button.width = 300;
        button.height = 100;
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            button.texture = RES.getRes(down);
            button.x -= 10;
            button.y -= 5;
        }, this);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            button.texture = RES.getRes(up);
            button.x -= 10;
            button.y -= 5;
            clickDown();
        }, this);
        button.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            button.texture = RES.getRes(up);
            button.x -= 10;
            button.y -= 5;
        }, this);
        this.addChild(button);
    };
    return MenuScene;
}(egret.DisplayObjectContainer));
__reflect(MenuScene.prototype, "MenuScene");
