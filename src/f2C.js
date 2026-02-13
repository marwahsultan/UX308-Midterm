// Write a function that converts temperatures in fahrenheit to celsius. 
// Test at least boiling, freezing water temperatures and room temperature (70).

export function f2C(fahrenheit){

    let celsius = (fahrenheit - 32) * 0.555;
    return (celsius);
}

if(import.meta.main){
    console.log(`f2C(32) returns ${f2C(32)}`);
}