class GameScene extends egret.DisplayObjectContainer {
    private bgImg: egret.Sprite;
    private motion: egret.DeviceOrientation;
    private player: Player;
    private beta: number;
    private gamma: number;
    private T: number;
    private cakes: MoonCake[];

    constructor() {
        super();
        this.player = new Player(Param.StageWidth / 2, Param.StageHeight / 2);
        this.bgImg = new egret.Sprite();
        this.motion = new egret.DeviceOrientation();
        this.beta = 0;
        this.gamma = 0;
        this.T = 0.01667;
        this.cakes = [];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
        this.addEventListener(egret.Event.LEAVE_STAGE, this.leave, this);
    }

    private addStage(): void {
        this.addBgImg();
        this.addChild(this.player);
        this._run();
    }

    private addCakes(): void {
        const total: number = Math.round(Math.random() * 5) + 1;
        if (this.cakes.length < total) {
            for (let i = 0; i < total - this.cakes.length; i++) {
                const ob = this.appear();
                const cake: MoonCake = new MoonCake(ob.rx, ob.ry);
                this.addChild(cake);
                this.cakes.push(cake);
            }
        }
    }

    private judge(ranx, rany): boolean {
        for (let i = 0; i < this.cakes.length; i++) {
            const distance = Math.sqrt(
                (ranx - this.cakes[i].x) * (ranx - this.cakes[i].x) +
                    (rany - this.cakes[i].y) * (rany - this.cakes[i].y)
            );
            if (2 * Param.CakeRadius >= distance) {
                return true;
            }
        }
        return false;
    }

    private appear(): any {
        let rx = Math.round(Math.random() * 640);
        let ry = Math.round(Math.random() * 1064);
        if (!this.judge(rx, ry)) {
            return { rx: rx, ry: ry };
        } else {
            return this.appear();
        }
    }

    private addBgImg(): void {
        this.bgImg.graphics.beginFill(0x000000, 1);
        this.bgImg.graphics.drawRect(0, 0, Param.StageWidth, Param.StageHeight);
        this.bgImg.graphics.endFill();
        this.addChild(this.bgImg);
    }

    private _run(): void {
        this.addCakes();
        egret.setInterval(this.addCakes, this, 2000);
        this.motion.addEventListener(egret.Event.CHANGE, this.onMotion, this);
        this.motion.start();
        egret.startTick(this.update, this);
    }

    private update(timeStamp: number): boolean {
        this.roleMove();
        this.cakes.forEach(cake => {
            if (
                Help.CircleCollision(
                    this.player.x,
                    this.player.y,
                    this.player.radius,
                    cake.x,
                    cake.y,
                    cake.radius
                )
            ) {
                cake.destory();
                this.cakes.splice(this.cakes.indexOf(cake), 1);
            }
        });
        return true;
    }

    private roleMove(): void {
        this.player.x +=
            20 * this.player.SpeedX * this.T +
            10 * this.player.accelerationX * this.T * this.T;
        this.player.y +=
            20 * this.player.SpeedY * this.T +
            10 * this.player.accelerationY * this.T * this.T;
        Help.BorderCollision(this.player);
        this.player.SpeedX = this.player.accelerationX * this.T * 1;
        this.player.SpeedY = this.player.accelerationY * this.T * 1;
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
