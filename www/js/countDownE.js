// This is a JavaScript file

          var countE = 5;   
     function countDownE() {
     
     if(countE==1){
     document.getElementById( "sampleOutputE" ).innerHTML = --countE;
      if(enemys[0]==1){
      document.getElementById("33").style.display = "";
     }
       if(enemys[1]==1){
      document.getElementById("34").style.display = "";
     }
       if(enemys[2]==1){
      document.getElementById("35").style.display = "";
     }
       if(enemys[3]==1){
      document.getElementById("36").style.display = "";
     }
   if(enemys[0]==0&&enemys[1]==0&&enemys[2]==0&&enemys[3]==0&&countE==0){
       myNavigator.pushPage('end.html');
   }
      document.getElementById("30").style.display = "none";
      document.getElementById("31").style.display = "none";
      document.getElementById("32").style.display = "none";
     }      
    else{
    document.getElementById( "sampleOutputE" ).innerHTML = --countE;
     }
     
     }