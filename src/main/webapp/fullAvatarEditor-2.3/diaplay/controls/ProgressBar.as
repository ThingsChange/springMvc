package diaplay.controls
{
    import flash.display.*;
    import flash.filters.*;
    import flash.text.*;

    public class ProgressBar extends Sprite
    {
        private var loading:Loading;
        private var textField:TextField;
        private var maskLayer:Sprite;

        public function ProgressBar(param1:DisplayObject, param2:Boolean = false)
        {
            var _loc_3:int;
            var _loc_4:int;
            if (param2)
            {
                _loc_3 = param1.stage.stageWidth;
                _loc_4 = param1.stage.stageHeight;
            }
            else
            {
                _loc_3 = param1.width;
                _loc_4 = param1.height;
            }// end else if
            this.maskLayer = new Sprite();
            this.maskLayer.cacheAsBitmap = true;
            this.maskLayer.filters = [new BlurFilter()];
            this.maskLayer.graphics.beginFill(15658734, 0.5);
            this.maskLayer.graphics.drawRect(0, 0, _loc_3, _loc_4);
            this.maskLayer.graphics.endFill();
            this.loading = new Loading();
            this.loading.x = (_loc_3 - this.loading.width) / 2;
            this.loading.y = (_loc_4 - this.loading.height) / 2;
            this.textField = new TextField();
            this.textField.width = _loc_3;
            this.textField.visible = false;
            addChild(this.maskLayer);
            addChild(this.loading);
            addChild(this.textField);
            return;
        }// end function

        public function set progres(param1:Number) : void
        {
            this.textField.visible = true;
            this.textField.text = param1 + "%";
            this.textField.setTextFormat(new TextFormat(null, 12, 6710886, true, null, null, null, null, "center"));
            this.textField.y = this.loading.y + (this.loading.height - this.textField.textHeight) / 2 - 2;
            return;
        }// end function

    }
}
