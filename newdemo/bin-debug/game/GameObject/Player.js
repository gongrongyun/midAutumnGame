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
    function Player(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.speedX = 0;
        _this.speedY = 0;
        _this.accelerationX = 0;
        _this.accelerationY = 0;
        _this.radius = 50;
        _this.init();
        return _this;
    }
    Player.prototype.init = function () {
        this.graphics.beginFill(0xff0000);
        this.graphics.drawCircle(0, 0, this.radius);
        this.graphics.endFill();
    };
    Object.defineProperty(Player.prototype, "SpeedX", {
        get: function () {
            return this.speedX;
        },
        set: function (speedX) {
            this.speedX += speedX;
            if (this.speedX > 50) {
                this.speedX = 50;
            }
            if (this.speedX < -50) {
                this.speedX = -50;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "SpeedY", {
        get: function () {
            return this.speedY;
        },
        set: function (speedY) {
            this.speedY += speedY;
            if (this.speedY > 50) {
                this.speedY = 50;
            }
            if (this.speedY < -50) {
                this.speedY = -50;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}(egret.Sprite));
__reflect(Player.prototype, "Player");
