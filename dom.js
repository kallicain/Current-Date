const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
}
 console.log(new Date)


 const numberToString = () => {
  const userInput = document.getElementById("num-to-str").value;
  const convert = userInput.toString()
  document.getElementById("display-element2").innerHTML = "my favorite number is: " + convert;
}

const stringToNumber = () => {
  const userInput = document.getElementById('str-to-num').value;
  const conversion = Number(userInput)
  document.getElementById("display-element3").innerHTML = conversion + " and it's type is " + typeof conversion;
}

const getType = () => {
  const userInput = document.getElementById('data-type').value;
  if (isNaN(userInput)) {
    document.getElementById('display-element4').innerHTML = " it is a string"
  } else {
    document.getElementById('display-element4').innerHTML = " is not a string"
  }
}


const addTwoNum = () => {
  const numInput1 = document.getElementById('num1').value;
  const numInput2 = document.getElementById('num2').value;
  const sum = Number(numInput1) + Number(numInput2);
  document.getElementById('display-element5').innerHTML = sum;
 }

