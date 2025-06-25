import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './array.js';
import { addAndLogUpper } from './mathModule.js';
import { arrayUpper } from './mathModule.js';

console.log('Add:', add(12, 9));
console.log('Subtract: ', subtract(14, 12));
console.log('Uppercase', toUpperCase("hello"));
console.log('Lowercase:', toLowerCase("GOODBYE"));
console.log('Multiply', multiply(7, 10));
console.log('Max: ', findMax([1, 154, 4, 988, 12316, 3]));
console.log('Reverse: ', reverseArray([1, 2, 3, 4, 5, 6]));
addAndLogUpper(20, 10);
arrayUpper(([41, 4, 3]), 10);
