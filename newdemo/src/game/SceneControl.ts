class SceneControl extends egret.Sprite {
    private static SceneControl: SceneControl;

    private GameScene: GameScene;

    private OpenScene: OpenScene;

    private currentScene: egret.DisplayObjectContainer;

    constructor() {
        super();
        this.GameScene = new GameScene();
        this.OpenScene = new OpenScene();
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
        this.currentScene.removeChildren();
        this.currentScene.addChild(this.GameScene);
    }

    public setOpenScene(): void {
        this.currentScene.removeChildren();
        this.currentScene.addChild(this.OpenScene);
        egret.Tween.get(this.currentScene)
            .wait(2000)
            .call(() => {
                this.setGameScene();
            });
    }
}
