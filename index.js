'use strict';

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * Usage:
 * 
 *      var nums = [1,2,3];
 * 
 *      each(nums, function(element, loc, collection) {
 *          console.log(element * 10);
 *      }); //--> prints 10, 20, 30
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/** 
 * identity: Designed to return the identity of any given value. 
 * Takes any value, number, string, array, object, ect. and returns it as 
 * the identity of the given value.
 * 
 * @param {Anything} value: The item whose "identity" we seek.
 * 
 * @return {Aything}: Returns the given value as it's own identity.
 * 
 * Usage: 
 * 
 *      var five = identity(5);
 *      // The variable five is now equal to 5.
 */
function identity (value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to find the type of any value without the errors of 
 * the "typeof" operator.
 * Takes any value and passes it into a set of if-else if-else statments.
 * When one of the statements is true, a string stateing the type of the value is returned.
 * 
 * @param {Anything} value: The item whose correct type is needed.
 * 
 * @return {String}: The type of the given value, but without the 
 * errors of the "typeof" operator.
 * 
 * Usage: 
 * 
 *      var array = typeOf([]);
 *      //returns "array" --> not "object"
 */
function typeOf (value){
  if(value === undefined){
    return "undefined";
  }else if(value === null){
    return "null";  
  }else if(Array.isArray(value) === true){
    return "array";
  }else if(typeof value === "number"){
    return "number";
  }else if(typeof value === "string"){
    return "string";
  }else if(typeof value === "boolean"){
    return "boolean";
  }else if(typeof value === "function"){
    return "function";
  }else if(typeof value === "object"){
    return "object";
  }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first "n" elements of the input array.
 * Takes an Array and splices a new array containing the number of elements 
 * specified by the second parameter. If a value that is NAN or equal to one is 
 * passed into num, the first element is spliced into an empty array. If the 
 * value passed to the array parameter is not an array, an empty array is 
 * returned. The elements spliced from the given array are returned as a new array.
 * 
 * @param {Array} array: The array that a new array containing "n" elements 
 * is to be created from.
 * 
 * @param {Number} num: The number of elements to spliced from the input array
 * and returned as a new array containing "n" elements.
 * 
 * @return {Array}: The array of elements spliced from the input array.
 * 
 * Usage: 
 * 
 *      first([1, 2, 3, 4, 5],3);
 *      // returns an array containing the first 3 elements --> [1,2,3]
 */
function first (array, num){
  if(Array.isArray(array) === false || num < 0){
     return [];
  }
  if(isNaN(num) === true){
    return array[0];
  }
  if(num === 1){
    return array[0];
  }
  return array.splice(0,num);
}
module.exports.first = first;

/**
 * last: Designed to return the last "n" elements of the input array.
 * Like "first" it takes an Array and splices a new array containing the number 
 * of elements specified by the second parameter. If a value that is NAN or is 
 * equal to one is passed into num, the last element of the given array is 
 * spliced into an empty array. If the value passed into the array parameter is 
 * not an array, an empty array is returned. The elements spliced from the given
 * array are returned as a new array.
 * 
 * @param {Array} array: The array that a new array is to be created from.
 * 
 * @param {Number} num: The number of elements to be spliced from the input
 * array and returned as a new array.
 * 
 * @return {Array}: The array of elements spliced from the input array.
 * 
 * Usage: 
 * 
 *      last([1, 2, 3, 4, 5],3);
 *      //returns an array containing the last 3 values --> [3, 4, 5]
 */
function last (array, num){
  if(Array.isArray(array) === false || num < 0){
     return [];
     }
  if(isNaN(num) === true){
    return array[array.length-1];
  }
  if(num === 1){
    return array[array.length-1];
  }
  return array.slice(-num);
}
module.exports.last = last;

/**
 * indexOf: Designed to return the array index of a selected value.
 * Takes an Array and loops across each element comparing them to the specified
 * value: val. If not found, then -1 is returned as the value's index in the array.
 * If the value is found in the array, the index of the element is returned. 
 * If the value is found multiple times, then the index of the first matching
 * element is returned.
 * 
 * @param {Array} arr: Any array containing anything.
 * 
 * @param {Anything} val: Anything that could be found in an array.
 * 
 * @return {Number}: The array index of the value inside the input array. 
 * 
 * Usage: 
 * 
 *      indexOf(["e", "f", "g", "h", "i"], "i");
 *      // returns the array index of i --> 4
 */
function indexOf (arr, val){
  var arg = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === val){
      arg.push(arr[i]);
      return i;
    }
  }
   var str = arg.join(" ");
  if(str.search(val) === -1){
    return -1;
  }
}
module.exports.indexOf = indexOf;

/**
 * filter: Designed to filter the elements of an array through a test function.
 * Takes an Array and runs each element of the array
 * through the test function. If the value passes the test, the test function 
 * returns true for that element. All elements that pass the test are collected and 
 * returned as an array.
 * 
 * @param {Array} array: The collection to filter.
 * 
 * @param {Function} func: The Function that is to be aplied to each element
 * of the array. The function must return a boolean based on logic test the 
 * value passed to it.
 * 
 * @return {Array}: An Array that contains elements that passed the test function.
 * 
 * Usage: 
 * 
 *      filter([1, 2, 3, 4, 5], function(l){return l * 10 > 30});
 *      //returns an array --> [4,5]
 */
function filter (array, func) {
    var filtered = [];
    each(array, function(element, i, arr) {
      if(func(element,i,arr) === true) {
        filtered.push(element);
      }
    });
    return filtered;
}
module.exports.filter = filter;

/**
 * reject: Designed to work like filter, reject filters each element of an 
 * array through a test function. Takes an Array and runs each element of the 
 * array through the test function. If the element fails the test, the test 
 * function returns false for that element. All elements 
 * that fail the test are collected and returned as an array.
 * 
 * @param {Array} array: The Array over which to itterate
 * 
 * @param {Function} func: The Function that is to be applied to each value
 * of the collection.
 * 
 * @return {Array}: An Array that contains values that failed the test function.
 * 
 * Usage: 
 * 
 *      reject([1, 2, 3, 4, 5], function(r){return r/3 === 1}) ;
 *      // returns an array --> [1, 2, 4, 5]
 */
function reject (array, func){
  var rej = [];
  filter(array, function(element, i, array){
    if(func(element, i, array) === false) {
     rej.push(element) ;
    }
  });
  return rej;
}
module.exports.reject = reject;

/**
 * partition: Designed to run the elements of an array through a test function.
 * Takes an Array and passes each element through the test function.
 * The test function returns a value whose truthy-ness (or falseyness) is assesed
 * by a set of if statements. Truthy values are pushed into a "truthy" array, 
 * while falsey values are pushed into a "falsey" array.
 * Both arrays are pushed into an empty array, and are returned as an array 
 * containing two sub arrays.
 * 
 * @param {Array} array: The array over which to itterate.
 * 
 * @param {Function} func: The function that is applied to each element. It can 
 * return any type of value.
 * 
 * @return {Array}: An array containing 2 sub arrays. One array contains values
 * that passed the test function as truthy the other array contains values that
 * returned from the test function as falsey.
 * 
 * Usage: 
 * 
 *      partition([1,2,3,4,5], function(p){return p * 10 >= 30});
 *      // returns an array containing two sub arrays --> [[3, 4, 5], [1, 2]]
 */
function partition (array, func){
  var part = [];
  var partTruthy = [];
  var partFalsey = [];
  for(var i = 0; i < array.length; i++){
    //console.log(func(array[i], i, array));
    if(func(array[i], i, array) === true){
      partTruthy.push(array[i]);
    }
    if(func(array[i], i, array) === false){
      partFalsey.push(array[i]);
    }
  }
  part.push(partTruthy);
  part.push(partFalsey);
  return part;
}
module.exports.partition = partition;

/**
 * unique: Designed to remove the duplicates from the input array. 
 * Takes an Array and loops across each element, pushing non duplicate elements 
 * into the new array. A new array without the duplicate elements of the input 
 * array is returned.
 * 
 * @param {Array} array: The array over which to itterate
 * 
 * @return {Array}: An array containing all the elements from the input array 
 * with all duplicates removed.
 * 
 * Usage: 
 * 
 *      unique([1, 1, 2, 3, 4, 4, 5]);
 *      // returns an array --> [1, 2, 3, 4, 5]
 */
function unique (array){
  var uniq = [];
  
  for(var i = 0; i < array.length; i++){
    if(indexOf(uniq, array[i]) === -1){
      uniq.push(array[i]);
    }
  }
  return uniq;
}
module.exports.unique = unique;

/**
 * map: Designed to loop over a collection and apply a function to each element.
 * Takes a collection, an Array or Object, and runs each value through a test 
 * function. The test function returns a new value which is then pushed to 
 * an output array. Once the loop ends, the output array is returned.
 * 
 * @param {Array or Object} collection: The collection over which to itterate
 * 
 * @param {Function} func: The function that is to be applied to each element
 * of the array. It can return any value.
 * 
 * @return {Array}: An array containing values returned from the test function.
 * 
 * Usage: 
 * 
 *      map([1, 2, 3, 4, 5], function(m){return m + 3}) ;
 *      // returns an array --> [4, 5, 6, 7, 8]
 */
function map (collection, func){
 var arr = [];
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
     arr.push(func(collection[i], i, collection));
    }
    return arr;
  }else{
    for(var key in collection){
      arr.push(func(collection[key], key, collection));
    }
    return arr;
  }
}
module.exports.map = map;

/**
 * pluck: Designed to extract the value of a property from an object located in 
 * an array of objects. Takes an Array of Objects, and loops across each element
 * (an object) while using bracket syntax, and the desired property to find 
 * certain a certain value in each object. The value of each property is pushed 
 * into an array which is then returned when the loop ends.
 * 
 * @param {Array} array: An array of objects.
 * 
 * @param {String} prop: The property that is to be searched for in the 
 * array of objects.
 * 
 * @return {Array}: An array that contains the values located at the specified 
 * property within each object contain within the array.
 * 
 * Usage: 
 * 
 *      pluck([{first: "Donald", last: "Duck"}, {first: "Mickey", last: "Mouse"},
 *      {number: 3, id: 132}], "first");
 *      // returns an array --> ["Donald", "Mickey", undefined]
 *      // The value of the "first" property does not exist in the 3rd object.
 *      //The value of "first" in the 3rd object is considered to be undefined.
 */
function pluck (array, prop){
  var pluk = [];
  map(array, function(element, i, array){
    pluk.push(element[prop]);
  });
  return pluk;
}
module.exports.pluck = pluck;

/**
 * contains: Designed to check an array for a specified value. 
 * Takes an Array and runs each element through the terneray operator. 
 * Each element of the array is compared to the given value. 
 * If they are equal, the ternerary operator returns true, else it returns false.
 * Afterward, the value of test (the value returned by the ternerary operator) 
 * is passed into an if statement. If it matches, true is returned, else false
 * is the final boolean.
 * 
 * @param {Array} array: The Array over which to itterate
 * 
 * @param {Anything} val: Anything that may be found in an array.
 * 
 * @return {Boolean}: A simple Boolean of true or false. 
 * 
 * Usage: 
 * 
 *      contains([1, {}, [], false, null, undefined, "Joe"], "Joe");
 *      // returns a boolean --> true
 */
function contains (array, val){
  for(var i = 0; i < array.length; i++){
    var test = (array[i] === val) ? true : false;
    if(test === true){
      return true;
    }
  }
  return false;
}
module.exports.contains = contains;

/**
 * every: Designed to check the truthy-ness of each value of a collection. 
 * Takes a collection, an Array or Object, and runs each value through a test 
 * Function which then returns a boolean of true or false. If all values return 
 * as true, then a final boolean of true is returned. If a test function is not 
 * given, then each value is checked for truthy-ness. If all values are truthy, 
 * then true will be returned as the final boolean, else false will be returned.
 * 
 * @param {Array or Object} collection: The collection over which to itterate
 * 
 * @param {Function} func: The Function that is applied to each element of 
 * an array, or each value of an object. Must return a boolean based on logic.
 * 
 * @return {Boolean}: A boolean of true or false, depending on the truthy-ness 
 * of each element or value of the collection.
 * 
 * Usage: 
 * 
 *      every([1, 2, 3, 4, 5], function(v){return v - 2 < 3);
 *      // returns a boolean --> false
 *      // 5 - 2 is not < 3.
 */
function every (collection, func) {
  var ever = [];
  if(func === undefined){
      var falsey = ["null", "undefined", "NaN", "false", "", "0"];
      for(var i = 0; i < collection.length; i++){
        if(falsey.join(" ").search(collection[i]) === -1){
          return true;
        }else{
          return false;
        }
      }
    }
  
  each(collection, function(element, i, arr) {
    if(func(element, i, arr) === true) {
      ever.push(true);
    }
  });

  if(ever.join(" ").search("false") === -1 && ever.length === collection.length || ever.length === Object.keys(collection).length){
    return true;
  }
  return false;
}
module.exports.every = every;

/**
 * some: Designed to work like every, some checks the truthy-ness of each value 
 * of a collection. Takes a collection, an Array or Object, and runs each value 
 * through a test Function which then returns a boolean of true or false. If 
 * some values are returned as true by the test function, then the final boolean
 * will be true. If a test function is not given, then each value is tested for 
 * truthy-ness. If some values are truthy then the final boolean will be true, 
 * but if all return as falsey, then the final boolean will be false.
 * 
 * @param {Array or Object} collection: The collection over which to itterate
 * 
 * @param {Function} func: The function that is applied to each element of the 
 * array, or each value of the object.
 * 
 * @return {Boolean}: A boolean of true or false, depending on the truthy-ness
 * of each value of the collection.
 * 
 * Usage: 
 * 
 *      some([1, 2, 3, 4, 5], function(s) {return s * 5 >= 15});
 *      // returns a boolean --> true
 */
function some (collection, func) {
  var som = [];
  
  if(func === undefined){
      var falsey = ["null", "undefined", "NaN", "false", "", "0"];
      for(var i = 0; i < collection.length; i++){
        if(falsey.join(" ").search(collection[i]) === -1){
          return true;
        }else{
          return false;
        }
      }
    }
  
  each(collection, function(element, i, arr) {
    if(func(element, i, arr) === true) {
      som.push(true);
    }
  });

  if(som.join(" ").search("true") === -1){
    return false;
  }
  return true;
 
}
module.exports.some = some;

/**
 * reduce: Designed to apply a function to each element of an array. 
 * Takes an Array, and a value called seed. The test function is first applied 
 * to seed, and then is applied to each element of the array. If seed is 
 * undefined, then the function starts with the first element of the array and
 * loops across the other elements as normal. During each iteration, the 
 * previous value from the function is assigned to a variable 
 * named prev (for previous value). After the last iteration, the value of prev
 * is returned.
 * 
 * @param {Array} array: The Array over which to itterate
 * 
 * @param {Function} func: The Function that is to be applied to each element
 * of the array.
 * 
 * @param {Anything} seed: The value that is to be used as the first previous result.
 * 
 * @return {Anything}: The value that is returned from the function, and is also
 * the last previous result.
 * 
 * Usage: 
 * 
 *      reduce([1, 2, 3, 4, 5], function(previousProduct, element, index)
 *        {return previousProduct * element}, 1);
 *      // returns a value --> 120
 */
function reduce (array, func, seed){
  if(seed === undefined){
    seed = array[0];
      var prev = seed;
    for(var i = 1; i < array.length; i++){
      prev = func(prev, array[i], i);  
    }
  }else{
  prev = seed;
  for(i = 0; i < array.length; i++){
    prev = func(prev, array[i], i);  
  }
  }
  return prev;
}
module.exports.reduce = reduce;

/**
 * extend: Designed to copy the properties of each object to the first object.
 * Takes any number of Objects as parameters. It loops across each argument 
 * (because there is an arguments array for every function) and copies each 
 * value over to the first argument(first Object), while replacing values that go by the 
 * same name. The modified first object is then returned as it now contains the 
 * values of both the original object and all objects passed in as arguments.
 * 
 * @param {Object} //no name//: The object which is supposed to recive all the 
 * properties of the other objects.
 * 
 * @param {Object} //no name//: The objects(s) whose properties are to be 
 * copied over to the first object.
 * 
 * @return {Object}: An object containing all the properties of the first object
 * and all the properties that belonged to the other objects.
 * 
 * Usage: 
 * 
 *      extend({one: "Alpha"}, {two: "Beta"});
 *      // returns an object --> {one: "Alpha", two: "Beta"}
 * 
 *      extend({a: "Alpha", b: "Beta"}, {a: "Uno", c: "Gamma"});
 *      // returns an object --> {a: "Uno", b: "Beta", c: "Gamma"}
 */
function extend (){
  for(var i = 1; i < arguments.length; i++){
    for(var key in arguments[i]){
      arguments[0][key] = arguments[i][key];
    }
  }
  return arguments[0];
}
module.exports.extend = extend;