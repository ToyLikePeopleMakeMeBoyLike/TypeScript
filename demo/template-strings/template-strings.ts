/* eslint-disable */
import { strict as assert } from "assert";
import { getOwnPropertyDescriptor } from "core-js/core/object";

// Template literals allow us to substitute variables into a string.
// This makes it easy to display customized messages.
//  '' or "" are used to create strings, but `` are used to create template literals.
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

function greet(message) {

    console.log(`hello ${message}`);
}
greet("TypeScript");

const kids =2;
const adults =4 ;
const totalPeople = `There are ${kids} kids and ${adults} adults`;


console.log(totalPeople);