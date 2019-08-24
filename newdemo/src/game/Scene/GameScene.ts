class GameScene extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }

    private addStage(): void {
        console.log("it is ok");
        ///add player and other things
    }
}
