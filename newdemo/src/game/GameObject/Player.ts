class Player extends egret.DisplayObjectContainer {
    public x: number;
    public y: number;
    public speedX: number;
    public speedY: number;

    constructor(x:number, y:number) {
        super();
        this.init();
    }

    private init(): void {
        var sprite:egret.Sprite = new egret.Sprite();
        sprite.graphics.beginFill(0xff0000);
        sprite.graphics.drawCircle(0, 0, 50);
        sprite.graphics.endFill();
        this.addChild(sprite);
    }

    private move(speedX:number, speedY:number): void{
        
    }
}
