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
}
