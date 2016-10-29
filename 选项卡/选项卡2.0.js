var oMenu = document.getElementById('first');
var ali = oMenu.getElementsByTagName('li');
var adiv = oMenu.getElementsByTagName('div');
for(var i=0;i<ali.length;i++){
    ali[i].index = i;
    ali[i].onclick = function(){
        for(var j=0;j<ali.length;j++){
            ali[j].className = '';
            adiv[j].className = '';
        }
        this.className = 'a';
        adiv[this.index].className = 'a';
    };
}


