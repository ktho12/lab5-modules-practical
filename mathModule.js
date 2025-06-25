export function add(a, b) {
        return a + b;
}
    
    export function subtract(a, b) {
            return a - b;
}

export default function multiply(a, b) {
    return a * b; 
}

import { toUpperCase } from './stringModule.js';

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

import { findMax } from './array.js';

export function arrayUpper(arr, b) {
    const max = findMax(arr);
    const sum = multiply(max, b);
    console.log(toUpperCase(sum.toString()));
}
