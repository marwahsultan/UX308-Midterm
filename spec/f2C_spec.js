import { f2C } from "../src/f2C.js";

describe("it converts fahrenheit to celcius", function(){
    it ("tests conversion", function(){
        let temp = f2C(32);
        expect (temp).toBe(0);
    })
})