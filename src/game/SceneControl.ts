/**
 * 场景控制类
 */
class SceneControl extends egret.Sprite {
    private static sceneControl:SceneControl

    private currentStage:egret.DisplayObjectContainer;

    private openScene:OpeningSceneLayer;

    private menuScene:MenuSceneLayer;

    private gameScene:GameSceneLayer;

    public static get init() {
        if (!this.sceneControl) {
            this.sceneControl = new SceneControl();
        }
        return this.sceneControl;
    }

    constructor() {
        super();
        this.openScene = new OpeningSceneLayer();
        this.menuScene = new MenuSceneLayer();
        this.gameScene = new GameSceneLayer();
    }
    
    public setStageHandler(stage:egret.DisplayObjectContainer):void {
        this.currentStage = stage;
    }

    public setOpeningScene():void {
        this.currentStage.addChild(this.openScene);
    }

    public setMenuScene():void {
        this.currentStage.addChild(this.menuScene);
    }
}