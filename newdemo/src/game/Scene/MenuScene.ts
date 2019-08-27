class MenuScene extends egret.DisplayObjectContainer {
    private startButton: egret.Bitmap;
    private menuButton: egret.Bitmap;
    private exitButton: egret.Bitmap;
    private bg: egret.Shape;

    constructor() {
        super();
        this.startButton = Help.createBitmapByName("startUp_png");
        this.menuButton = Help.createBitmapByName("menuUp_png");
        this.exitButton = Help.createBitmapByName("exitUp_png");
        this.bg = new egret.Shape();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init(): void {
        this.bg.graphics.beginFill(0x000000, 1);
        this.bg.graphics.drawRect(0, 0, Param.StageWidth, Param.StageHeight);
        this.bg.graphics.endFill();
        this.addChild(this.bg);

        this.addButton(
            this.startButton,
            400,
            "startUp_png",
            "startDown_png",
            this.clickStart
        );
        this.addButton(
            this.menuButton,
            550,
            "menuUp_png",
            "menuDown_png",
            this.clickMenu
        );
        this.addButton(
            this.exitButton,
            700,
            "exitUp_png",
            "exitDown_png",
            this.clickExit
        );
    }

    private clickStart() {
        SceneControl.init.setGameScene();
        console.log("ok");
    }

    private clickMenu(): void {
        console.log("menu");
    }

    private clickExit(): void {
        console.log("exit");
    }

    private addButton(
        button: egret.Bitmap,
        y: number,
        up: string,
        down: string,
        clickDown: Function
    ): void {
        button.x = Param.StageWidth / 2 - 150;
        button.y = y;
        button.width = 300;
        button.height = 100;
        button.touchEnabled = true;
        button.addEventListener(
            egret.TouchEvent.TOUCH_BEGIN,
            () => {
                button.texture = RES.getRes(down);
                // button.x += 10;
                // button.y += 5;
            },
            this
        );
        button.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            () => {
                button.texture = RES.getRes(up);
                // button.x -= 10;
                // button.y -= 5;
                clickDown();
            },
            this
        );
        button.addEventListener(
            egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,
            () => {
                button.texture = RES.getRes(up);
                // button.x -= 10;
                // button.y -= 5;
            },
            this
        );
        this.addChild(button);
    }
}
