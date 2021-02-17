
function numberToHoursAndMinutes()
{ 

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

      readline.question('Input a number: ', (number) => {
        if(parseInt(number) != null){

 var hours = Math.floor(number / 60);  
 var minutes = number % 60;
 if(hours == 1 && minutes ==1){
   console.log(hours + " hour, " + minutes + " minute")
 }
 else if(hours ==1 && minutes==0){
  console.log(hours + " hour, " + minutes + " minutes")
 }
 else if(hours ==0 && minutes==1){
  console.log(hours + " hours, " + minutes + " minute")
 }
 else if(hours ==1 && minutes>1){
  console.log(hours + " hour, " + minutes + " minutes")
 }
 else if(hours>1 && minutes==1){
  console.log(hours + " hours, " + minutes + " minute")
 }
 else{
   console.log(hours + " hours, " + minutes + " minutes")
 }
 readline.close();
        }     
})}

numberToHoursAndMinutes();

