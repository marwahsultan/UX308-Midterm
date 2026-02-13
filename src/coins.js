/**
 * @param {number} nickels
 * @param {number} dimes
 * @param {number} quarters
 * @param {number} loonies
 * @param {number} toonies
 * @returns {number} total value in dollars
 */
export function coins(nickels, dimes, quarters, loonies, toonies) {
    const total =
        (nickels * 0.05) +
        (dimes * 0.10) +
        (quarters * 0.25) +
        (loonies * 1.00) +
        (toonies * 2.00);

    return Number(total.toFixed(2)); 
}

if (import.meta.main) {
    console.log(`coins(1,1,1,1,1) = ${coins(1,1,1,1,1)}`);
}