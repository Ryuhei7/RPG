 var php=50;

function damage(){
var rand = Math.floor( Math.random() * 11 ) ;
document.getElementById( "php" ).innerHTML = php - rand;
var s =　"あなたは"+ rand +"のダメージを受けた！！"
alert(s);
  if(php<=0){
       myNavigator.pushPage('gameover.html');
   }
}