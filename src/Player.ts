class Player extends egret.Bitmap {
    constructor() {
        super();
    }

    public init():void {
        this.texture = RES.getRes("player_png");
        this.width = 100;
        this.height = 100;
        this.x = 100;
        this.y = 100;
        this.addEventListener("keydown", (e) => {
            console.log("ok");
        }, this);
    }

    set X(x:number) {
        this.x += x;
    }

    set Y(y:number) {
        const tw = egret.Tween.get(this);
        tw.to({y: this.y + y}, 16);
    }
}