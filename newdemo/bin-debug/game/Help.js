var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Help = (function () {
    function Help() {
    }
    Help.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Help.removeChild = function (child) {
        if (child && child.parent) {
            child.parent.removeChild(child);
        }
    };
    Help.CircleCollision = function (playerx, playery, playerradius, objx, objy, objradius) {
        var distance = (playerx - objx) ^ 2 + (playery - objy) ^ 2;
        ;
        if ((playerradius + objradius) ^ 2 <= distance) {
            return false;
        }
        return true;
    };
    Help.BorderCollision = function (player) {
        if (player.x < player.radius) {
            player.x = player.radius;
        }
        if (player.y < player.radius) {
            player.y = player.radius;
        }
        if (player.y > Param.StageHeight - player.radius) {
            player.y = Param.StageHeight - player.radius;
        }
        if (player.x > Param.StageWidth - player.radius) {
            player.x = Param.StageWidth - player.radius;
        }
    };
    return Help;
}());
__reflect(Help.prototype, "Help");
