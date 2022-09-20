const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const rankineInput = document.getElementById("rankine");
let botaoLimpar = document.getElementById("btn");
const inputs = document.getElementsByClassName("input");


botaoLimpar.addEventListener('click', () =>{
    celsiusInput.value = ''; 
    kelvinInput.value = '';
    rankineInput.value = '';
    fahrenheitInput.value = '';
        
    });

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celsius":
                fahrenheitInput.value = ((value * 1.8) + 32).toFixed(2);
                kelvinInput.value = (value + 273.15).toFixed(2);
                rankineInput.value = ((value * 1.8000) + 491.67).toFixed(2);
                break;
            case "fahrenheit":
                celsiusInput.value = ((value - 32) / 1.8).toFixed(2);
                kelvinInput.value = (((value - 32) / 1.8) + 273.15).toFixed(2);
                rankineInput.value = ((value - 32) + 491.67).toFixed(2);
                break;
            case "kelvin":
                celsiusInput.value = (value - 273.15).toFixed(2);
                fahrenheitInput.value = (((value - 273.15) * 1.8) + 32).toFixed(2);
                rankineInput.value = (((value - 273.15) * 1.8000) + 491.67).toFixed(2);
                break;


            case "rankine" :
                celsiusInput.value = ((value - 491.67) / 1.8000).toFixed(2);
                fahrenheitInput.value = ((value - 491.67) + 32).toFixed(2);
                kelvinInput.value = ((value - 491.67) + 273.15).toFixed(2);

                break;
                
        }
        
    });
       
}


