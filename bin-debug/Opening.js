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
var Opening = (function (_super) {
    __extends(Opening, _super);
    function Opening(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = Params.Width;
        _this.height = Params.Height;
        return _this;
    }
    Opening.prototype.start = function () {
        this.addLogo();
        this.addText();
        var tw = egret.Tween.get(this);
        tw.to({ "alpha": 0 }, 2000);
    };
    Opening.prototype.addLogo = function () {
        var logo = new egret.Bitmap(RES.getRes("qkteam_png"));
        logo.x = this.width / 2 - 100;
        logo.y = 100;
        logo.width = 200;
        logo.height = 200;
        this.addChild(logo);
    };
    Opening.prototype.addText = function () {
        var text = new egret.TextField();
        text.text = "晴空工作室";
        text.size = 50;
        text.width = 250;
        text.height = 100;
        text.y = 350;
        text.x = this.width / 2 - 125;
        this.addChild(text);
    };
    return Opening;
}(egret.DisplayObjectContainer));
__reflect(Opening.prototype, "Opening");
