package 
{
    import flash.events.*;
    import flash.net.*;
    import flash.ui.*;

    public class Menu extends Object
    {
        private static const _NAME:String = "FullAvatar Editor";
        private static const _VERSION:String = "Version : 2.3";
        private static const _AUTHOR:String = "Author : LooseLive@gmail.com";
        private static const _AUTHORPAGE:String = "http://www.FullAvatarEditor.com";

        public function Menu()
        {
            return;
        }// end function

        public static function support() : ContextMenu
        {
            var _loc_1:* = new ContextMenu();
            _loc_1.hideBuiltInItems();
            var _loc_2:* = new ContextMenuItem(_NAME, false, true);
            _loc_2.addEventListener(ContextMenuEvent.MENU_ITEM_SELECT, openLink);
            var _loc_3:* = new ContextMenuItem(_VERSION, false, false);
            var _loc_4:* = new ContextMenuItem(_AUTHOR, false, false);
            _loc_1.customItems.push(_loc_2, _loc_3, _loc_4);
            return _loc_1;
        }// end function

        private static function openLink(param1:ContextMenuEvent) : void
        {
            navigateToURL(new URLRequest(_AUTHORPAGE));
            return;
        }// end function

    }
}
