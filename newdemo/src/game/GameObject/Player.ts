class Player extends egret.Sprite {
    public x: number;
    public y: number;
    private speedX: number;
    private speedY: number;
    public accelerationX: number;
    public accelerationY: number;

    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.accelerationX = 0;
        this.accelerationY = 0;
        this.init();
    }

    private init(): void {
        this.graphics.beginFill(0xff0000);
        this.graphics.drawCircle(0, 0, 50);
        this.graphics.endFill();
    }

    set SpeedX(speedX: number) {
        this.speedX += speedX;
        if (this.speedX > 50) {
            this.speedX = 50;
        }
        if (this.speedX < -50) {
            this.speedX = -50;
        }
    }

    set SpeedY(speedY: number) {
        this.speedY += speedY;
        if (this.speedY > 50) {
            this.speedY = 50;
        }
        if (this.speedY < -50) {
            this.speedY = -50;
        }
    }

    get SpeedX(): number {
        return this.speedX;
    }

    get SpeedY(): number {
        return this.speedY;
    }

    // set AccelerationX(accelerationX: number) {
    //     this.accelerationX += accelerationX;
    //     if (this.accelerationX > 50) {
    //         this.accelerationX = 50;
    //     }
    //     if (this.accelerationX < -50) {
    //         this.accelerationX = -50;
    //     }
    // }

    // set AccelerationY(accelerationY: number) {
    //     this.accelerationY += accelerationY;
    //     if (this.accelerationY > 50) {
    //         this.accelerationY = 50;
    //     }
    //     if (this.accelerationY < -50) {
    //         this.accelerationY = -50;
    //     }
    // }

    // get AccelerationX(): number {
    //     return this.accelerationX;
    // }

    // get AccelerationY(): number {
    //     return this.accelerationY;
    // }
}
