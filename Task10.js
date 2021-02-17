function commonLetters(){

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });


      String1 = readline.question('String 1: ', (string1) => {
        if(string1 != null){
            String2 = readline.question('String 2: ', (string2) => {
                if(string2 != null){

  
    var commonLetters = "";
    for(var i = 0; i < string1.length; i++){
      for(var j = 0;j < string1.length; j++){
        if(string1.charAt(i) == string2.charAt(j)){
          if(commonLetters.indexOf(string1.charAt(i)) > -1){
            continue;
          } else{
            commonLetters = commonLetters + string1.charAt(i) + ",";
          }
  
        }
      }
    }
    console.log(commonLetters)
  }})}})}
  commonLetters()
