var oMenu = document.getElementById('menu');
var aH1 = oMenu.getElementsByTagName('h1');
//var aSubmenu = oMenu.getElementsByTagName('ul');
for(var i=0; i<aH1.length; i++){
    //aH1[i].ss = i;
    aH1[i].flag = false;//定义false是合上的
    aH1[i].onclick = function(){
        var oUl = next(this);
        if(this.flag){
            //aSubmenu[this.ss].style.display = 'none';
            oUl.style.display = 'none';
        }else{
            //aSubmenu[this.ss].style.display = 'block';
            oUl.style.display = 'block';
        }
        this.flag = !this.flag;
    };
}

function next(ele){
    do{
        ele = ele.nextSibling;
    }while(ele && ele.nodeType != 1);
    return ele;
}
//var oMenu = document.getElementById("menu");
//var aH3 = oMenu.getElementsByTagName("h1");
//var aSubMenu = oMenu.getElementsByTagName("ul");
//for(var i=0; i<aH3.length; i++){
//    aH3[i].index = i;//重点！给每个h3自定义属性index,用于保存住对应的i值
//    aH3[i].bFlag = false;//自定义属性bFlag，用于保存自己的状态,
//    // false表示当前是合上，true表示当前是展开的
//    aH3[i].onclick = function(){
//        if(this.bFlag){
//            aSubMenu[this.index].style.display = "none";
//        }else {
//            aSubMenu[this.index].style.display = "block";
//        }
//        this.bFlag = !this.bFlag;
//    };
//}
