class Main extends eui.UILayer {

    static gaming: boolean //游戏是否运行
    private cover:Opening;
    private menu:Menu;
    private player:Player;

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();
        await platform.login();
        const userInfo = await platform.getUserInfo();

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;

    protected createGameScene():void {
        this.opening();
        egret.Tween.get(this).wait(2000).call(this.addMenu);
    }

    private opening():void {
        this.cover = new Opening(0, 0);
        this.addChild(this.cover);
        this.cover.start();
    }

    private addMenu():void {
        this.removeChild(this.cover);
        this.menu = new Menu(0, 0);
        this.addChild(this.menu);
        this.menu.start();
        this.menu.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.menu.startButton.texture = RES.getRes("button_up_png");
            this.removeChild(this.menu);
            this.addPlayer();
        }, this);
        
        this.menu.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.menu.exitButton.texture = RES.getRes("button_up_png");
            window.close();
        }, this);
    }

    private addPlayer():void {
        this.player = new Player();
        this.player.init();
        this.addChild(this.player);
        window.addEventListener("keydown", (e:KeyboardEvent) => {
            switch(e.code) {
                case "KeyW":
                    this.player.Y = -8;
                    break;
                case "KeyS":
                    this.player.Y = 8;
                    break;
                case "KeyA":
                    this.player.X = -8;
                    break;
                case "KeyD":
                    this.player.X = 8;
                    const hit:boolean = this.player.hitTestPoint(150, 120, true);
                    console.log(hit ? "hited" : "not hit");
                    break;
                default:
                    return
            }
        });
    }
}
