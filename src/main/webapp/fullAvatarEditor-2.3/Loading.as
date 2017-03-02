package 
{
    import flash.display.*;

    dynamic public class Loading extends MovieClip
    {

        public function Loading()
        {
            addFrameScript(24, frame25);
            return;
        }// end function

        function frame25()
        {
            gotoAndPlay("loop");
            return;
        }// end function

    }
}
