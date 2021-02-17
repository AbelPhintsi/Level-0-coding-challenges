
function evenOrOdd(){
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Input a number ', number => {
      if(number % 2 == 0){ //check if the number is even
    console.log("even");
    readline.close();
      }
      else{
        console.log("odd"); //otherwise it's odd
        readline.close();
      }
  });
}
evenOrOdd();
