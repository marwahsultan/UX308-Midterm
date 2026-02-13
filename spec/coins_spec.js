import { coins } from "../src/coins.js";

describe("tests for total number of coins", function () {

    it("returns 0 when all inputs are 0", function () {
        expect(coins(0, 0, 0, 0, 0)).toBe(0);
    });

    it("calculates value correctly for small numbers", function () {
        expect(coins(1, 1, 1, 1, 1)).toBe(3.40);
    });

    it("calculates value correctly for multiple coins", function () {
        expect(coins(2, 3, 4, 1, 2)).toBe(6.4);
    });

});