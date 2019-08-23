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
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = Params.Width;
        _this.height = Params.Height;
        _this.upButton = RES.getRes("button_up_png");
        _this.downButton = RES.getRes("button_down_png");
        _this.startButton = new egret.Bitmap();
        _this.exitButton = new egret.Bitmap();
        return _this;
    }
    Menu.prototype.start = function () {
        this.createButton(this.startButton, this.width / 2 - 100, 100);
        this.createButton(this.exitButton, this.width / 2 - 100, 280);
        this.addChild(this.startButton);
        this.addChild(this.exitButton);
    };
    Menu.prototype.createButton = function (button, x, y) {
        var _this = this;
        button.texture = this.upButton;
        button.width = 200;
        button.height = 80;
        button.x = x;
        button.y = y;
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            button.texture = _this.downButton;
        }, this);
    };
    return Menu;
}(egret.DisplayObjectContainer));
__reflect(Menu.prototype, "Menu");
