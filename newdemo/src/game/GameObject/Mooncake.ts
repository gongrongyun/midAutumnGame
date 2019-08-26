class Mooncake extends egret.Sprite {
    public constructor() {
        super();
        this.once( egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
    }
    private onAddToStage(event:egret.Event) {
        var imgLoader:egret.ImageLoader = new egret.ImageLoader;
        imgLoader.once( egret.Event.COMPLETE, this.imgLoadHandler, this );
        imgLoader.load( "resource/assets/Mooncake.jpg" );
    }
    private _bgInfo:egret.Shape;
    private imgLoadHandler( evt:egret.Event ):void{
        
        var bmd:egret.BitmapData = evt.currentTarget.data;
        /*** 本示例关键代码段开始 ***/
        /// 将已加载完成的图像显示出来
        // var Mooncake:egret.Bitmap = new egret.Bitmap();
        // Mooncake.$bitmapData = bmd;
        // Mooncake.x = 100;
        // Mooncake.y = 100;
        // this.addChild( Mooncake );
        /*** 本示例关键代码段结束 ***/
        Mooncake.anchorOffsetX = bmd.width / 2;
        Mooncake.anchorOffsetY = bmd.height / 2;
        Mooncake.x = this.stage.stageWidth * .5;
        Mooncake.y = this.stage.stageHeight * .5;

        var Mooncake:egret.Bitmap = new egret.Bitmap();
        Mooncake.$bitmapData = bmd;
        var res1,res2,res3,res4,res5,res6,res7,res8;
        let Rand1 = Math.random();
        let Rand2 = Math.random();
        let Rand3 = Math.random();
        let Rand4 = Math.random(); 
        let Rand5 = Math.random();
        let Rand6 = Math.random(); 
        let Rand7 = Math.random();
        let Rand8 = Math.random();   
        res1 = Math.round(Rand1 * 570);
        res2 = Math.round(Rand2 * 940);
        res3 = Math.round(Rand3 * 570);
        res4 = Math.round(Rand4 * 940);
        res5 = Math.round(Rand5 * 570);
        res6 = Math.round(Rand6 * 940);
        res7 = Math.round(Rand7 * 570);
        res8 = Math.round(Rand8 * 940);
        var Mooncake1:egret.Bitmap = new egret.Bitmap();
        Mooncake.$bitmapData = bmd;
        Mooncake1.x = res1;
        Mooncake1.y = res2;
        this.addChild(Mooncake1);
        
        var Mooncake2:egret.Bitmap = new egret.Bitmap();
        Mooncake.$bitmapData = bmd;
        Mooncake2.x = res3;
        Mooncake2.y = res4;
        this.addChild(Mooncake2);
        
        var Mooncake3:egret.Bitmap = new egret.Bitmap();
        Mooncake.$bitmapData = bmd;
        Mooncake3.x = res5;
        Mooncake3.y = res6;
        this.addChild(Mooncake3);
        
        var Mooncake4:egret.Bitmap = new egret.Bitmap();
        Mooncake.$bitmapData = bmd;
        Mooncake4.x = res7;
        Mooncake4.y = res8;
        this.addChild(Mooncake4);
}
}

//创建一个文本框,设定一个scrollRect限制显示范围
var bigText: egret.TextField = new egret.TextField();
bigText.text = "平移和滚动显示对象,平移和滚动显示对象";
bigText.scrollRect = new egret.Rectangle(0, 0, 200, 50);
bigText.cacheAsBitmap = true;
this.addChild(bigText);

//创建一个按钮,点击后控制文本内容向左移动
var btnLeft: egret.Shape = new egret.Shape();
btnLeft.graphics.beginFill(0xcccc01);
btnLeft.graphics.drawRect(0, 0, 50, 50);
btnLeft.graphics.endFill();
btnLeft.x = 50;
btnLeft.y = 100;
this.addChild(btnLeft);
btnLeft.touchEnabled = true;
btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);

//创建一个按钮,点击后控制文本内容向右移动
var btnRight: egret.Shape = new egret.Shape();
btnRight.graphics.beginFill(0x01cccc);
btnRight.graphics.drawRect(0,0,50,50);
btnRight.graphics.endFill();
btnRight.x = 150;
btnRight.y = 100;
this.addChild(btnRight);
btnRight.touchEnabled = true;
btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);

//点击按钮后,控制文本向左右移动的方法
function onScroll(e: egret.TouchEvent): void {
  var rect: egret.Rectangle = bigText.scrollRect;
  switch (e.currentTarget) {
    case btnLeft:
      rect.x += 20;
      break;
    case btnRight:
      rect.x -= 20;
      break;
  }
  bigText.scrollRect = rect;
}