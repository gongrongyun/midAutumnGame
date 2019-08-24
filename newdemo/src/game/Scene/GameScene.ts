class GameScene extends egret.DisplayObjectContainer {
    private bgImg: egret.Sprite;

    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }

    private addStage(): void {
        this.SceneInit();
        // this.addChild(new Player())
    }

    private SceneInit(): void {
        this.bgImg = new egret.Sprite();
        this.bgImg.graphics.beginFill(0x000000, 1);
        this.bgImg.graphics.drawRect(0, 0, Param.StageWidth, Param.StageHeight);
        this.bgImg.graphics.endFill();
        this.addChild(this.bgImg);
    }
}
