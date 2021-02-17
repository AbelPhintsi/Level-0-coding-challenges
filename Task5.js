
function areaOfTriangle(){

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('side 1: ', (side1) =>{
      if(side1 != null){ 
        readline.question('side 2: ', (side2) => {
            if(side2 != null){
                readline.question('side 3: ', (side3) => {
                    if(side3 != null){
                        var s = (parseInt(side1) + parseInt(side2) + parseInt(side3))/2;//semi perimeter
                        var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));;
                        console.log(area);
                        readline.close();
                }
    }
                )}})}})
}
areaOfTriangle()