firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobbyLog () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hobbyLog()
// This is a block of JavaScript code that defines some variables, a function, and calls that function.

// The first three lines define three variables: firstName is a string containing the value 'John', age is a number containing the value 35, and hobby is a string containing the value 'Coding'.

// The logTwice function takes a single parameter called parameter. The function logs the value of the parameter to the console twice using the console.log() function.

// The hobbyLog function calls the logTwice function and passes in a template literal as its argument. The template literal uses string interpolation to insert the values of the firstName, age, and hobby variables into the string. The resulting string will look like: "Hello, John (35). I love Coding!".

// Finally, the hobbyLog function is called, which in turn calls the logTwice function with the template literal as its argument. This will result in the template literal being logged to the console twice.