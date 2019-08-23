/**
 * 全局辅助类
 */

class Help {
  public static CreateBitMapByName(name: string): egret.Bitmap {
    const texture: egret.Texture = RES.getRes(name);
    const bitmap: egret.Bitmap = new egret.Bitmap(texture);
    return bitmap;
  }

  public static removeChild(child: egret.DisplayObject): void {
    if (child && child.parent) {
      if ((<any>child.parent).removeElement) {
        (<any>child.parent).removeElement(<any>child);
      } else {
        child.parent.removeChild(child);
      }
    }
  }
}
