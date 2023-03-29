// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

const displayDate = () => {
  const currentDate = new Date()

  // currentDate.getTime();

  document.getElementById("display-element").innerHTML = currentDate;
}
 console.log(new Date)

// Write a JavaScript program to convert a number to a string.
const numberToString = (inputNum) => {
  const convert = inputNum.toString()
  console.log("my favorite number is: " + convert + typeof convert)
}

numberToString(7)


// Write a JavaScript program to convert a string to the number.
const stringToNumber = (inputStr) => {
  const conversion = Number(inputStr)
  console.log(conversion + typeof conversion)
}

stringToNumber(25)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // const bool = true;
  // const checkIfBool = () => {
    
  // }
  // console.log(typeof bool)

  const getType = (dataType) => {
    console.log(typeof dataType)
  }

  getType(true)
  getType(null)
  getType(undefined)
  getType(NaN)
  getType(33)
  getType('33')
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String


  
// Write a JavaScript program that adds 2 numbers together.

// const addTwoNum = (num1, num2) => {
//   return num1 + num2;
// }
// addTwoNum(5, 10);
  const addTwoNum = (num1, num2) => {
   console.log(num1 + num2);
  }

addTwoNum(5, 10)

// Write a JavaScript program that runs only when 2 things are true.
const runIfTrue = (k) => {
  if (k > 0 && k < 5) {
    console.log('K is between 0 and 5');
  }
}

runIfTrue(3)

// Write a JavaScript program that runs when 1 of 2 things are true.
const oneOfTwo = (k) => {
  if (k > 0 || k < 0) {
    console.log('K is greater than 0');
  }
}

oneOfTwo(3)

// Write a JavaScript program that runs when both things are not true.  
const bothNotTrue = (k) => {
  if (k === 0 && k === 5) {
    console.log('K equals 3')
  } else {
    console.log('K is not equal to 0 or 5');
  }
}

bothNotTrue(3)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
