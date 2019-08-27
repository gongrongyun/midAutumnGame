class GameScene extends egret.DisplayObjectContainer {
    private bgImg: egret.Sprite;
    private motion: egret.DeviceOrientation;
    private player: Player;
    private beta: number;
    private gamma: number;
    private T: number;
    private cakes: MoonCake[];
    private cakeNum: number;
    private ranx: number;
    private rany: number;

    constructor() {
        super();
        this.player = new Player(Param.StageWidth / 2, Param.StageHeight / 2);
        this.bgImg = new egret.Sprite();
        this.motion = new egret.DeviceOrientation();
        this.beta = 0;
        this.gamma = 0;
        this.T = 0.01667;
        this.cakes = [];
        this.cakeNum = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        this.addEventListener(egret.Event.LEAVE_STAGE, this.leave, this);
    }

    private addStage(): void {
        this.addBgImg();
        this.addChild(this.player);
        this._run();
    }

    private addCakes(): void {
        const total: number = Math.round(Math.random()*5)+1;
        console.log(total, this.cakeNum)
        if(this.cakeNum < total){
            for(let i = 0; i < total- this.cakeNum; i++){
                const ob = this.appear();
                console.log(ob)
                const cake: MoonCake= new MoonCake(ob.rx,ob.ry);
                this.addChild(cake);
                this.cakes.push(cake);
                this.cakeNum++;
            }
        }
    }

    private judge(): boolean {
        for(let i=0;i<length;i++){
            const distance = 
                (this.ranx - this.cakes[i].x) ^ 2 +(this.rany - this.cakes[i].y) ^ 2
            );
            if (50 <= distance) {
                return false;
            }
        }
        return true;
    }

    private appear(): any{
        this.init();
        let rx = this.ranx;
        let ry = this.rany;
        if(this.judge())
        return {"rx":rx, "ry":ry};
        else return this.appear();
    }

    private init(): void{ 
        this.ranx = Math.round(Math.random()*640);
        this.rany = Math.round(Math.random()*1064);
    }

    private addBgImg(): void {
        this.bgImg.graphics.beginFill(0x000000, 1);
        this.bgImg.graphics.drawRect(0, 0, Param.StageWidth, Param.StageHeight);
        this.bgImg.graphics.endFill();
        this.addChild(this.bgImg);
    }

    private _run(): void {
        this.addCakes();
        setInterval(this.addCakes, 2000);
        this.motion.addEventListener(egret.Event.CHANGE, this.onMotion, this);
        this.motion.start();
        egret.startTick(this.update, this);
    }

    private update(timeStamp: number): boolean {
        this.roleMove();
        this.cakes.forEach(cake => {
            if (Help.CircleCollision(this.player.x, this.player.y, this.player.radius, cake.x, cake.y, cake.radius)) {
                console.log("ok");
                cake.destory();
                // this.addCakes();
            }
        });
        return true;
    }

    private roleMove(): void {
        this.player.x +=
            6 * this.player.SpeedX * this.T +
            2 * this.player.accelerationX * this.T * this.T;
        this.player.y +=
            6 * this.player.SpeedY * this.T +
            2 * this.player.accelerationY * this.T * this.T;
        Help.BorderCollision(this.player);
        this.player.SpeedX = this.player.accelerationX * this.T * 2;
        this.player.SpeedY = this.player.accelerationY * this.T * 2;
    }

    private onMotion(e: egret.OrientationEvent): void {
        this.player.accelerationX = e.gamma - this.gamma;
        this.player.accelerationY = e.beta - this.beta;
    }

    private leave(): void {
        egret.stopTick((): boolean => {
            return true;
        }, this);
        this.motion.stop();
    }
}
