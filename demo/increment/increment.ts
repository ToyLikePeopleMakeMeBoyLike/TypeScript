/* eslint-disable */
import { strict as assert } from "assert";

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment



let n =1 ;
n++;
assert.equal(n, 2);
//prefixx increment
++n;
assert.equal(n, 3);

n =5;
const k = n++;
assert.equal(k, 6);


n =5 ;
const t = --n;
assert.equal(t, 4);


//also all operations including /*-+

