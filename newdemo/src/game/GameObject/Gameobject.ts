class Gameobject extends egret.Sprite {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
        this.init();
    }

    private init(): void {
        this.graphics.beginFill(0xffff00);
        this.graphics.drawCircle(0, 0, 30);
        this.graphics.endFill();
    }
}
