package 
{
    import diaplay.controls.*;
    import flash.display.*;
    import flash.events.*;
    import flash.utils.*;

    public class Preloader extends MovieClip
    {
        private var loading:ProgressBar;

        public function Preloader()
        {
            if (stage)
            {
                stage.scaleMode = StageScaleMode.NO_SCALE;
                stage.align = StageAlign.TOP_LEFT;
            }// end if
            addEventListener(Event.ENTER_FRAME, this.checkFrame);
            loaderInfo.addEventListener(ProgressEvent.PROGRESS, this.progress);
            loaderInfo.addEventListener(IOErrorEvent.IO_ERROR, this.ioError);
            this.loading = new ProgressBar(stage, true);
            addChild(this.loading);
            return;
        }// end function

        private function ioError(param1:IOErrorEvent) : void
        {
            return;
        }// end function

        private function progress(param1:ProgressEvent) : void
        {
            var _loc_2:* = Math.round(param1.bytesLoaded / param1.bytesTotal * 100);
            this.loading.progres = _loc_2;
            return;
        }// end function

        private function checkFrame(param1:Event) : void
        {
            if (currentFrame == totalFrames)
            {
                stop();
                this.loadingFinished();
            }// end if
            return;
        }// end function

        private function loadingFinished() : void
        {
            removeEventListener(Event.ENTER_FRAME, this.checkFrame);
            loaderInfo.removeEventListener(ProgressEvent.PROGRESS, this.progress);
            loaderInfo.removeEventListener(IOErrorEvent.IO_ERROR, this.ioError);
            removeChild(this.loading);
            this.startup();
            return;
        }// end function

        private function startup() : void
        {
            var _loc_1:* = getDefinitionByName("Main") as Class;
            addChild(new _loc_1 as DisplayObject);
            contextMenu = Menu.support();
            return;
        }// end function

    }
}
