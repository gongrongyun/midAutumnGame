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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super.call(this) || this;
    }
    Player.prototype.init = function () {
        this.texture = RES.getRes("player_png");
        this.width = 100;
        this.height = 100;
        this.x = 100;
        this.y = 100;
        this.addEventListener("keydown", function (e) {
            console.log("ok");
        }, this);
        this.addListener();
    };
    Player.prototype.addListener = function () {
        var _this = this;
        window.addEventListener("keydown", function (e) {
            switch (e.code) {
                case "KeyW":
                    _this.y += -8;
                    break;
                case "KeyS":
                    _this.y += 8;
                    break;
                case "KeyA":
                    _this.x += -8;
                    break;
                case "KeyD":
                    _this.x += 8;
                    break;
                default:
                    return;
            }
        });
    };
    Object.defineProperty(Player.prototype, "X", {
        set: function (x) {
            this.x += x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "Y", {
        set: function (y) {
            var tw = egret.Tween.get(this);
            tw.to({ y: this.y + y }, 16);
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}(egret.Bitmap));
__reflect(Player.prototype, "Player");
