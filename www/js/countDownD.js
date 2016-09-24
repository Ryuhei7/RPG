// This is a JavaScript file

          var countD = 5;   
     function countDownD() {
     
     if(countD==1){
     document.getElementById( "sampleOutputD" ).innerHTML = --countD;
      if(enemys[0]==1){
      document.getElementById("26").style.display = "";
     }
       if(enemys[1]==1){
      document.getElementById("27").style.display = "";
     }
       if(enemys[2]==1){
      document.getElementById("28").style.display = "";
     }
       if(enemys[3]==1){
      document.getElementById("29").style.display = "";
     }
   
      document.getElementById("23").style.display = "none";
      document.getElementById("24").style.display = "none";
      document.getElementById("25").style.display = "none"; 
     }      
    else{
    document.getElementById( "sampleOutputD" ).innerHTML = --countD;
     }
     
     }