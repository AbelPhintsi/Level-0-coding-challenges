//Celcius to Fehrenheit
function convertToCelsiusToFahrenheit(c){

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

      readline.question('Input in Celsius: ', (c) => {
        if(parseInt(c) != null){
        var f;
        f = c * 9/5 + 32;//formula to convert celcius to fahrenheit
        console.log(f);
        readline.close();
        }})
    
    }
    convertToCelsiusToFahrenheit();

    //Fehrenheit to celcius
    function convertFahrenheitToCelsius(f){

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
          });
    
          readline.question('Input in Fahrenheit: ', (f) => {
            if(parseInt(f) != null){
            var c;
            c = (f - 32) * 5 / 9;//formula to convert celcius to fahrenheit
            console.log(c);
            readline.close();
            }})
        
        }
        convertFahrenheitToCelsius();

    




