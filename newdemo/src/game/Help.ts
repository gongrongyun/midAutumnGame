class Help {
    public static createBitmapByName(name: string): egret.Bitmap {
        const result = new egret.Bitmap();
        const texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    public static removeChild(child: egret.DisplayObject): void {
        if (child && child.parent) {
            child.parent.removeChild(child);
        }
    }

    public static CircleCollision(player: Player, obj: GameObject): boolean {
        const distance = Math.sqrt(
            (player.x - obj.x) ^ (2 + (player.y - obj.y)) ^ 2
        );
        if (player.radius + obj.radius <= distance) {
            return false;
        }
        return true;
    }

    public static BorderCollision(player: Player): void {
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
    }
}
