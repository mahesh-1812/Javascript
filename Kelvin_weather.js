//Declared variable name kelvin
const kelvin = 300;

// Convert to celsius
let celsius = kelvin - 273;

// Canvert to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees`);

// Convert to Newton
let newton = celsius * (33 / 100);

//Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees`);
