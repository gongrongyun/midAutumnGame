class Start extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
    }

    private addStage():void {
        console.log(SceneControl.init);
        SceneControl.init.setStageHandler(this);
        SceneControl.init.setOpeningScene();
    }
}