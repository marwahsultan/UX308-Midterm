import { earthquake } from "../src/earthquake.js";

describe("tests for damage level", function () {
    it("tests for Little or no damage", function () {
        expect(earthquake(0)).toBe("Little or no damage");
        expect(earthquake(4.9)).toBe("Little or no damage");
    });
    it("tests for Some damage", function () {
        expect(earthquake(5)).toBe("Some damage");
        expect(earthquake(5.4)).toBe("Some damage");
    });
    it("tests for Serious damage", function () {
        expect(earthquake(6)).toBe("Serious damage: walls may crack or fall");
    });
    it("tests for Disaster", function () {
        expect(earthquake(7)).toBe("Disaster: buildings may collapse");
    });
    it("tests for Catastrophe", function () {
        expect(earthquake(7.5)).toBe("Catastrophe: most buildings destroyed");
        expect(earthquake(8)).toBe("Catastrophe: most buildings destroyed");
    });

});