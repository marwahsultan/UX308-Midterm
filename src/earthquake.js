/**
 * @param {number} intensity - Richter scale value
 * @returns {string} result - description of damage
 */

export function earthquake(intensity) {
    if (intensity < 5) {
        return "Little or no damage";
    }
    else if (intensity < 5.5) {
        return "Some damage";
    }
    else if (intensity < 6.5) {
        return "Serious damage: walls may crack or fall";
    }
    else if (intensity < 7.5) {
        return "Disaster: buildings may collapse";
    }
    else {
        return "Catastrophe: most buildings destroyed";
    }
}

if (import.meta.main) {
    console.log(earthquake(8));
}