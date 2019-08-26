class OpenScene extends egret.DisplayObjectContainer {
    private bg: egret.Shape;
    private logo: egret.Bitmap;
    private text: egret.TextField;

    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.start, this);
        this.width = Param.StageWidth;
        this.height = Param.StageHeight;
        this.bg = new egret.Shape();
        this.logo = Help.createBitmapByName("qkteam_png");
        this.text = new egret.TextField();
    }

    public start(): void {
        this.addBackground();
        this.addLogo();
        this.addText();
        const logoTw: egret.Tween = egret.Tween.get(this.logo);
        logoTw.to({ alpha: 0 }, 2000);
        const textTw: egret.Tween = egret.Tween.get(this.text);
        textTw.to({ alpha: 0 }, 2000);
    }

    private addLogo(): void {
        this.logo.x = this.width / 2 - 100;
        this.logo.y = 400;
        this.logo.width = 200;
        this.logo.height = 200;
        this.addChild(this.logo);
    }

    private addBackground(): void {
        this.bg.graphics.beginFill(0x000000, 1);
        this.bg.graphics.drawRect(0, 0, this.width, this.height);
        this.bg.graphics.endFill();
        this.addChild(this.bg);
    }

    private addText(): void {
        this.text.text = "晴空工作室";
        this.text.size = 50;
        this.text.width = 250;
        this.text.height = 100;
        this.text.y = 650;
        this.text.x = this.width / 2 - 125;
        this.addChild(this.text);
    }
}
