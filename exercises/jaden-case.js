'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(x) {
	let jadenTable = x.split(' ');
	for (let index = 0 ; index < jadenTable.length ; index += 1) {
	jadenTable[index] = jadenTable[index].charAt(0).toUpperCase() + jadenTable[index].slice(1, jadenTable[index].length)
	}
	return jadenTable.join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
// End of tests */
