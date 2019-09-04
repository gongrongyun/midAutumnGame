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
var MoonCake = (function (_super) {
    __extends(MoonCake, _super);
    function MoonCake(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.type = "cake";
        _this.radius = 25;
        _this.init();
        return _this;
    }
    MoonCake.prototype.init = function () {
        this.graphics.beginFill(0xffff00, 1);
        this.graphics.drawCircle(0, 0, this.radius);
        this.graphics.endFill();
    };
    return MoonCake;
}(GameObject));
__reflect(MoonCake.prototype, "MoonCake");
