/* eslint-disable */
import { strict as assert } from "assert";


//NOT
const writing =true;
const reading =!writing;


// OR

const rating =9;
const favoriteMovie = false;

const suggestMovie = rating > 8 || favoriteMovie;
assert.equal(suggestMovie, true);


//AND
const age =  18;
const isTeenager =age >=13 && age < 20;
assert.equal(isTeenager,true);



