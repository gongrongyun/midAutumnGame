class Help {
    public static createBitmapByName(name: string): egret.Bitmap {
        const result = new egret.Bitmap();
        const texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
