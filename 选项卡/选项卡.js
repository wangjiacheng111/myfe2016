var oMenu = document.getElementById('first');
var ali = oMenu.getElementsByTagName('li');
var data = ['aaa','bbb','ccc'];
var otext = document.getElementById('text');
otext.innerHTML = data[0];

for(var i=0;i<ali.length;i++){
    ali[i].index = i;
    ali[i].onclick = function(){
        for(var j=0;j<ali.length;j++){
            ali[j].className = '';
        }
        this.className = 'a';
        otext.innerHTML = data[this.index];
    };
}

