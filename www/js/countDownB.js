// This is a JavaScript file

          var countB = 5;   
     function countDownB() {
     
     if(countB==1){
     document.getElementById( "sampleOutputB" ).innerHTML = --countB;
      if(enemys[0]==1){
      document.getElementById("9").style.display = "";
     }
       if(enemys[1]==1){
      document.getElementById("10").style.display = "";
     }
       if(enemys[2]==1){
      document.getElementById("11").style.display = "";
     }
       if(enemys[3]==1){
      document.getElementById("12").style.display = "";
     }
   if(enemys[0]==0&&enemys[1]==0&&enemys[2]==0&&enemys[3]==0&&countB==0){
       myNavigator.pushPage('end.html');
   }
      document.getElementById("13").style.display = "none";
      document.getElementById("14").style.display = "none";
      document.getElementById("15").style.display = "none";
     }      
    else{
    document.getElementById( "sampleOutputB" ).innerHTML = --countB;
     }
     
     }