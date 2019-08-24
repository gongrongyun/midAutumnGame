class Main extends eui.UILayer {
    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener(context => {
            // custom lifecycle plugin
        });

        egret.lifecycle.onPause = (): void => {
            egret.ticker.pause();
        };

        egret.lifecycle.onResume = (): void => {
            egret.ticker.resume();
        };

        const assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        this.runGame().catch(e => {
            console.log(e);
        });
    }

    private async runGame(): Promise<any> {
        await this.loadResource();
        this.createGameScene();
        await platform.login();
    }

    private async loadResource(): Promise<any> {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        } catch (e) {
            console.error(e);
        }
    }

    private loadTheme(): Promise<any> {
        return new Promise((resolve: Function): void => {
            const theme = new eui.Theme(
                "resource/default.thm.json",
                this.stage
            );
            theme.addEventListener(
                eui.UIEvent.COMPLETE,
                () => {
                    resolve();
                },
                this
            );
        });
    }

    protected createGameScene(): void {
        this.addChild(new Start());
    }
}
