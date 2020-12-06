const prompt = require('prompt-sync')({sigint: true});
let temp_c = prompt("Enter the temperature in Celcius: ");
const alert = (9 / 5) * temp_c + 32;
console.log("temp in F = " + String(alert));

let name = 'Василий';
let admin = name;
console.log(admin);

// будет приведение типов к стоке и конкатенация строк произойдет
console.log(1000 + "108"); 