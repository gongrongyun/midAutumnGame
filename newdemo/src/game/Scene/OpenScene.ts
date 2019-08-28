class OpenScene extends egret.DisplayObjectContainer {
    private bg: egret.Shape;
    private logo: egret.Bitmap;
    private author: egret.TextField;

    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.start, this);
        this.width = Param.StageWidth;
        this.height = Param.StageHeight;
        this.bg = new egret.Shape();
        this.logo = Help.createBitmapByName("qkteam_png");
        this.author = new egret.TextField();
    }

    public start(): void {
        this.addBackground();
        this.addLogo();
        this.addAuthor();
        const logoTw: egret.Tween = egret.Tween.get(this.logo);
        logoTw.to({ alpha: 0 }, 2000);
        const textTw: egret.Tween = egret.Tween.get(this.author);
        textTw.to({ alpha: 0 }, 2000);
    }

    private addLogo(): void {
        this.logo.x = this.width / 2 - 250;
        this.logo.y = 400;
        this.logo.width = 500;
        this.logo.height = 500;
        this.addChild(this.logo);
    }

    private addBackground(): void {
        this.bg.graphics.beginFill(0x000000, 1);
        this.bg.graphics.drawRect(0, 0, this.width, this.height);
        this.bg.graphics.endFill();
        this.addChild(this.bg);
    }

    private addAuthor(): void {
        this.author.text = "晴空工作室";
        this.author.size = 80;
        this.author.textColor = 0xffffee;
        this.author.width = 400;
        this.author.height = 80;
        this.author.y = 1150;
        this.author.x = this.width / 2 - 200;
        this.addChild(this.author);
    }
}
