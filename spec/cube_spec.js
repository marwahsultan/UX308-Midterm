import { cube } from "../src/cube.js";

describe("converts height of a cube in meters to the volume of the cube in cubic meters", function(){
    it ("tests conversion", function(){
        let meterSquared = cube(1);
        expect (meterSquared).toBe(1);
    })
})