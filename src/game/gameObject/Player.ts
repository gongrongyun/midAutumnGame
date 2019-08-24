class Player extends egret.Bitmap {
    constructor() {
        super();
    }

    public init(): void {
        this.texture = RES.getRes("player_png");
        this.width = 100;
        this.height = 100;
        this.x = 100;
        this.y = 100;
        this.addEventListener("keydown", (e) => {
            console.log("ok");
        }, this);
        this.addListener();
    }

    private addListener(): void {
        window.addEventListener("keydown", (e) => {
            switch(e.code) {
                case "KeyW":
                    this.y += -8;
                    break;
                case "KeyS":
                    this.y += 8;
                    break;
                case "KeyA":
                    this.x += -8;
                    break;
                case "KeyD":
                    this.x += 8;
                    break;
                default:
                    return
            }
        })
    }

    set X(x: number) {
        this.x += x;
    }

    set Y(y: number) {
        const tw = egret.Tween.get(this);
        tw.to({y: this.y + y}, 16);
    }
}