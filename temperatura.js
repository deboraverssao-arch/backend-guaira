//Conversor de temperaturas
const cidade = "Curitiba";
let tempCelsius = 18.5;

const tempFahrenheit = tempCelsius * (9/5) + 32;
const tempKenvin = tempCelsius + 273.15;

console.log(`A temperatura de ${cidade} está ${tempCelsius} Cº`);
console.log(`Fahrenheit: ${tempFahrenheit} Fº`);
console.log(`Kelvin: ${tempKenvin.toFixed(1)} Kº`);

