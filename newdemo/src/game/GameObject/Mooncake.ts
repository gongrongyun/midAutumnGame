class MoonCake extends GameObject {
    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
        this.type = "cake";
        this.radius = 25;
        this.init();
    }

    private init(): void {
        this.graphics.beginFill(0xffff00, 1);
        this.graphics.drawCircle(0, 0, this.radius);
        this.graphics.endFill();
    }
}
