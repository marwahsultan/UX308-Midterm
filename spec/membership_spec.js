import { membership } from "../src/membership.js";

describe("it tests for discount", function(){
    it ("tests for 0%", function(){
        let discount = membership(0);
        expect (discount).toBe("0%");
    })
    it ("tests for 5%", function(){
        let discount = membership(1);
        expect (discount).toBe("5%");
    })
    it ("tests for 10%", function(){
        let discount = membership(2);
        expect (discount).toBe("10%");
    })
    it ("tests for 15%", function(){
        let discount = membership(3);
        expect (discount).toBe("15%");
    })
})