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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.player = new Player(Param.StageWidth / 2, Param.StageHeight / 2);
        _this.bgImg = new egret.Sprite();
        _this.motion = new egret.DeviceOrientation();
        _this.beta = 0;
        _this.gamma = 0;
        _this.T = 0.01667;
        _this.cakes = [];
        _this.cakeNum = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        _this.addEventListener(egret.Event.LEAVE_STAGE, _this.leave, _this);
        return _this;
    }
    GameScene.prototype.addStage = function () {
        this.addBgImg();
        this.addChild(this.player);
        this._run();
    };
    GameScene.prototype.addCakes = function () {
        var total = Math.round(Math.random() * 5) + 1;
        console.log(total, this.cakeNum);
        if (this.cakeNum < total) {
            for (var i = 0; i < total - this.cakeNum; i++) {
                var ob = this.appear();
                console.log(ob);
                var cake = new MoonCake(ob.rx, ob.ry);
                this.addChild(cake);
                this.cakes.push(cake);
                this.cakeNum++;
            }
        }
    };
    GameScene.prototype.judge = function () {
        for (var i = 0; i < length; i++) {
            var distance = (this.ranx - this.cakes[i].x) ^ 2 + (this.rany - this.cakes[i].y) ^ 2;
            ;
            if (50 <= distance) {
                return false;
            }
        }
        return true;
    };
    GameScene.prototype.appear = function () {
        this.init();
        var rx = this.ranx;
        var ry = this.rany;
        if (this.judge())
            return { "rx": rx, "ry": ry };
        else
            return this.appear();
    };
    GameScene.prototype.init = function () {
        this.ranx = Math.round(Math.random() * 640);
        this.rany = Math.round(Math.random() * 1064);
    };
    GameScene.prototype.addBgImg = function () {
        this.bgImg.graphics.beginFill(0x000000, 1);
        this.bgImg.graphics.drawRect(0, 0, Param.StageWidth, Param.StageHeight);
        this.bgImg.graphics.endFill();
        this.addChild(this.bgImg);
    };
    GameScene.prototype._run = function () {
        this.addCakes();
        setInterval(this.addCakes, 2000);
        this.motion.addEventListener(egret.Event.CHANGE, this.onMotion, this);
        this.motion.start();
        egret.startTick(this.update, this);
    };
    GameScene.prototype.update = function (timeStamp) {
        var _this = this;
        this.roleMove();
        this.cakes.forEach(function (cake) {
            if (Help.CircleCollision(_this.player.x, _this.player.y, _this.player.radius, cake.x, cake.y, cake.radius)) {
                console.log("ok");
                cake.destory();
                // this.addCakes();
            }
        });
        return true;
    };
    GameScene.prototype.roleMove = function () {
        this.player.x +=
            6 * this.player.SpeedX * this.T +
                2 * this.player.accelerationX * this.T * this.T;
        this.player.y +=
            6 * this.player.SpeedY * this.T +
                2 * this.player.accelerationY * this.T * this.T;
        Help.BorderCollision(this.player);
        this.player.SpeedX = this.player.accelerationX * this.T * 2;
        this.player.SpeedY = this.player.accelerationY * this.T * 2;
    };
    GameScene.prototype.onMotion = function (e) {
        this.player.accelerationX = e.gamma - this.gamma;
        this.player.accelerationY = e.beta - this.beta;
    };
    GameScene.prototype.leave = function () {
        egret.stopTick(function () {
            return true;
        }, this);
        this.motion.stop();
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene");
