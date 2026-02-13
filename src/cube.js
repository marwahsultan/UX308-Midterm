// Write a function that converts the height of a cube  
// in meters to the volume of the cube in cubic meters

export function cube(height){
    let volume = height * height * height * height;
    return (volume);
}

if(import.meta.main){
    console.log(`cube(2) returns ${cube(2)}`);
}