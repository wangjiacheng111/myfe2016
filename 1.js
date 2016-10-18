var Menu = document.getElementById('menu');
var MainMenu = Menu.getElementsByTagName('li');
for(var i=0; i<MainMenu.length; i++){
    if(MainMenu[i].className == 'main_menu') {
        MainMenu[i].onmouseover = function () {
            var submenu = this.getElementsByTagName('ul')[0];
            submenu.style.display = 'block';
        };
        MainMenu[i].onmouseout = function () {
            var submenu = this.getElementsByTagName('ul')[0];
            submenu.style.display = 'none';
        };
    }
}
//    var aMainMenu = document.getElementsByClassName("main_menu");
//    for(var i=0; i<aMainMenu.length; i++){
//        aMainMenu[i].onmouseover = function(){
//            var oUl = this.getElementsByTagName("ul")[0];
//            oUl.style.display = "block";
//        };
//        aMainMenu[i].onmouseout = function(){
//            var oUl = this.getElementsByTagName("ul")[0];
//            oUl.style.display = "none";
//        };
//    } //IE8以下不支持 但是此方式可以省略判断