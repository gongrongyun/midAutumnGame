class SceneControl extends egret.Sprite {
    private static SceneControl: SceneControl;

    private GameScene: GameScene;

    private currentScene: egret.DisplayObjectContainer;

    constructor() {
        super();
        this.GameScene = new GameScene();
    }

    public static get init(): SceneControl {
        if (!this.SceneControl) {
            this.SceneControl = new SceneControl();
        }
        return this.SceneControl;
    }

    public setStageHandler(stage: egret.DisplayObjectContainer): void {
        this.currentScene = stage;
    }

    public setGameScene(): void {
        this.currentScene.addChild(this.GameScene);
    }
}
