class GameScene extends egret.DisplayObjectContainer {
    private bgImg: egret.Sprite;
    private motion: egret.DeviceOrientation;
    private player: Player;
    private beta: number;
    private gamma: number;
    private T: number;
    private text: egret.TextField;
    private Gameobject: Gameobject;
    private distance: number;
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        this.addEventListener(egret.Event.LEAVE_STAGE, egret.stopTick, this);
        this.player = new Player(Param.StageWidth / 2, Param.StageHeight / 2);
        this.bgImg = new egret.Sprite();
        this.text = new egret.TextField();
        this.beta = 0;
        this.gamma = 0;
        this.T = 0.01667;
        this.Gameobject = new Gameobject(Math.round(Math.random()*640), Math.round(Math.random()*1036));
    }

    private addStage(): void {
        this.addBgImg();
        this.addChild(this.player);
        this.addChild(this.text);
        this.addChild(this.Gameobject);
        this._run();
    }

    private addBgImg(): void {
        this.bgImg.graphics.beginFill(0x000000, 1);
        this.bgImg.graphics.drawRect(0, 0, Param.StageWidth, Param.StageHeight);
        this.bgImg.graphics.endFill();
        this.addChild(this.bgImg);
    }

    private _run(): void {
        this.motion = new egret.DeviceOrientation();
        this.motion.addEventListener(egret.Event.CHANGE, this.onMotion, this);
        this.motion.start();
        egret.startTick(this.update, this);
    }

    private update(timeStamp: number): boolean {
        this.distance = (this.player.x-this.Gameobject.x) * (this.player.x-this.Gameobject.x) + (this.player.y-this.Gameobject.y) * (this.player.y-this.Gameobject.y);
        this.player.x +=
            6*this.player.SpeedX * this.T +
            2*this.player.accelerationX * this.T * this.T;
        this.player.y +=
            6*this.player.SpeedY * this.T +
            2*this.player.accelerationY * this.T * this.T;
        if (this.player.x < 50) {
            this.player.x = 50;
        }
        if (this.player.y < 50) {
            this.player.y = 50;
        }
        if (this.player.y > 1086) {
            this.player.y = 1086;
        }
        if (this.player.x > 590) {
            this.player.x = 590;
        }
        this.player.SpeedX = this.player.accelerationX * this.T*2;
        this.player.SpeedY = this.player.accelerationY * this.T*2;
        this.text.text =
            "x = " +
            this.player.x +
            "\n" +
            "y = " +
            this.player.y +
            "\n" +
            "speedx = " +
            this.player.SpeedX +
            "\n" +
            "speedy = " +
            this.player.SpeedY +
            "\n" +
            "accelerationx = " +
            this.player.accelerationX +
            "\n" +
            "sccelerationy = " +
            this.player.accelerationY +
            "\n" +
            "X = " +
            this.Gameobject.x +
            "\n" +
            "Y = " +
            this.Gameobject.y +
            "\n" +
            "distance = " + 
            this.distance + 
            "\n";
        if(this.distance <= 6400)
        {
            this.removeChild(this.Gameobject);
            this.Gameobject = new Gameobject(Math.round(Math.random()*640), Math.round(Math.random()*1036));
            this.addChild(this.Gameobject);
        }
        return true;
    }

    private onMotion(e: egret.OrientationEvent): void {
        this.player.accelerationX = e.gamma - this.gamma;
        this.player.accelerationY = e.beta - this.beta;
    }
}
