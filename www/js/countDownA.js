    
        var enemys= new Array();
            enemys[0]=1;
            enemys[1]=1;
            enemys[2]=1;
            enemys[3]=1;
            
          var countA = 5;  
          
     function countDownA() {
     
     if(countA==1){
     document.getElementById( "sampleOutputA" ).innerHTML = --countA;
      if(enemys[0]=1){
      document.getElementById("0").style.display = "";
     }
       if(enemys[1]=1){
      document.getElementById("1").style.display = "";
     }
       if(enemys[2]=1){
      document.getElementById("2").style.display = "";
     }
       if(enemys[3]=1){
      document.getElementById("3").style.display = "";
     }
   
      document.getElementById("5").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("7").style.display = "none";
     }      
    else{
    document.getElementById( "sampleOutputA" ).innerHTML = --countA;
     }
     
     
     
     }
