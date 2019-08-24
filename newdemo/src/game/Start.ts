class Start extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }

    private addStage(): void {
        SceneControl.init.setStageHandler(this);
        SceneControl.init.setGameScene();
    }
}
