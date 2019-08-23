class OpeningSceneLayer extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.start, this);
        this.width = Params.Width;
        this.height = Params.Height;
    }

    public start():void {
        this.addLogo()
        this.addText();
        const tw:egret.Tween = egret.Tween.get(this);
        tw.to({"alpha":0}, 2000);
    }

    private addLogo():void {
        const logo:egret.Bitmap = new egret.Bitmap(RES.getRes("qkteam_png"));
        logo.x = this.width / 2 - 100;
        logo.y = 100;
        logo.width = 200;
        logo.height = 200;
        this.addChild(logo);
    }

    private addText():void {
        const text:egret.TextField = new egret.TextField();
        text.text = "晴空工作室";
        text.size = 50;
        text.width = 250;
        text.height = 100;
        text.y = 350;
        text.x = this.width / 2 - 125;
        this.addChild(text);
    }

}