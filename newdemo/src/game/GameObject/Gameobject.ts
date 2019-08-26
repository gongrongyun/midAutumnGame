class GameObject extends egret.Sprite {
    public x: number;
    public y: number;
    public radius: number;
    public type: string;

    constructor() {
        super();
    }

    public destory(): void {
        if (this && this.parent) {
            this.parent.removeChild(this);
        }
    }
}
