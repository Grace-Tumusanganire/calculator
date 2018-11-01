let inputOne = ''
let inputTwo = ''
let inputThree=''
let operation = null
let result = null

let display = document.getElementById("display")
const getNumber = number => {
let value
	console.log(number)
	if(!operation && !inputTwo && !result) {
		value =inputOne+=number
	}
	else if (inputOne && operation && !result) { 
		value= inputTwo+= number 
		display.value = inputTwo

	}
	
   else if (result && operation){
	    inputTwo = ""
		inputOne = result
		value = inputTwo+=number
	}
	else if (result&&operation&& !inputThree) {
		value=inputThree+=number;
		display.value=value;

	}
display.value= value

};
const getOperation = op => {
	console.log(op)
	operation=op;

} 
const getResult = () => {
	console.log(inputOne, inputTwo, operation, result)
	switch (operation) {
		case "addButton" :
		return (display.value = result = parseInt (inputOne)+ parseInt(inputTwo));
		case "subtractButton":
		return (display.value = result = parseInt (inputOne)- parseInt(inputTwo));
		case "multiplyButton" :
		return (display.value = result = parseInt (inputOne)* parseInt(inputTwo));
		case "divideButton" :
		return (display.value = result = parseInt (inputOne)/ parseInt(inputTwo));
		default:
		return null;
     
	}
console.log("this is the result")
}
const resetAll = () => {
inputOne = ''
inputTwo = ''
 operation = null
 result = null
display.value = "" 
}




