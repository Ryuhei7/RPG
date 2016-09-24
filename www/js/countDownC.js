// This is a JavaScript file

          var countC = 5;   
     function countDownC() {
     
     if(countC==1){
     document.getElementById( "sampleOutputC" ).innerHTML = --countC;
      if(enemys[0]==1){
      document.getElementById("19").style.display = "";
     }
       if(enemys[1]==1){
      document.getElementById("20").style.display = "";
     }
       if(enemys[2]==1){
      document.getElementById("21").style.display = "";
     }
       if(enemys[3]==1){
      document.getElementById("22").style.display = "";
     }
   if(enemys[0]==0&&enemys[1]==0&&enemys[2]==0&&enemys[3]==0&&countC==0){
       myNavigator.pushPage('end.html');
   }
      document.getElementById("16").style.display = "none";
      document.getElementById("17").style.display = "none";
      document.getElementById("18").style.display = "none";
     }      
    else{
    document.getElementById( "sampleOutputC" ).innerHTML = --countC;
     }
     
     }