 var php=100;
function damage(){

var rand = Math.floor( Math.random() * 11 ) ;
php = php-rand;
 if(php<=0){
       myNavigator.pushPage('gameover.html');
   }
var s =　"あなたは"+ rand +"のダメージを受けた！！"

alert(s);

document.getElementById( "php1" ).innerHTML = php;
document.getElementById( "php2" ).innerHTML = php;
document.getElementById( "php3" ).innerHTML = php;
document.getElementById( "php4" ).innerHTML = php;
document.getElementById( "php5" ).innerHTML = php;
}