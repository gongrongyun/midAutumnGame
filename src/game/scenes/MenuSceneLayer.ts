class MenuSceneLayer extends egret.DisplayObjectContainer {

    private upButton:any;
    private downButton:any;
    public startButton:egret.Bitmap;
    public exitButton:egret.Bitmap;

    constructor() {
        super();
        this.width = Params.Width;
        this.height = Params.Height;
        this.upButton = RES.getRes("button_up_png");
        this.downButton = RES.getRes("button_down_png");
        this.startButton = new egret.Bitmap();
        this.exitButton = new egret.Bitmap();
    }

    public start():void {
        this.createButton(this.startButton, this.width/2-100, 100);
        this.createButton(this.exitButton, this.width/2-100, 280);
        this.addChild(this.startButton);
        this.addChild(this.exitButton);
    }

    private createButton(button:egret.Bitmap, x:number, y:number):void {
        button.texture = this.upButton;
        button.width = 200;
        button.height = 80;
        button.x = x;
        button.y = y;
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
            button.texture = this.downButton;
        }, this);
    }
}