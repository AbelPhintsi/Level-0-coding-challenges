function getMaximumNumber(){

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('1st number: ', (num1) =>{
    if(num1 != null){ 
      readline.question('2nd number: ', (num2) => {
          if(num2 != null){
              readline.question('3rd number: ', (num3) => {
                  if(num3 != null){
                    let max;
                    // check for the maximum number
                    if(parseInt(num1) >= parseInt(num2) && parseInt(num1) >= parseInt(num3)) {
                    max = num1;
                    }
                    else if (parseInt(num2) >= parseInt(num1) && parseInt(num2) >= parseInt(num3)) {
                    max = num2;
                    }
                    else {
                    max = num3;
                    }

                    console.log('The maximum number is ' + max);
                    readline.close();
              }
  }
              )}})}})

}
getMaximumNumber()