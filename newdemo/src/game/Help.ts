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

    public static CircleCollision(
        playerx: number,
        playery: number,
        playerradius: number,
        objx: number,
        objy: number,
        objradius: number
    ): boolean {
        const distance: number = Math.sqrt(
            (playerx - objx) * (playerx - objx) +
                (playery - objy) * (playery - objy)
        );
        if (playerradius + objradius < distance) {
            return false;
        }
        return true;
    }

    public static BorderCollision(player: Player): void {
        if (player.x < player.radius) {
            player.x = player.radius;
            player.speedX=0;
        }
        if (player.y < player.radius) {
            player.y = player.radius;
            player.speedY=0;
        }
        if (player.y > Param.StageHeight - player.radius) {
            player.y = Param.StageHeight - player.radius;
            player.speedY=0;
        }
        if (player.x > Param.StageWidth - player.radius) {
            player.x = Param.StageWidth - player.radius;
            player.speedX=0;
        }
    }
}
