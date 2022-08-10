let myCalculation = [];

function addNumber(number) {
    myCalculation.push(number);
    console.log(myCalculation);
    return myCalculation;
}

function addOperator(operator) {
    myCalculation.push(operator);
    console.log(myCalculation);
    return myCalculation;
}

// get result
function getSum() {
    let sum = 0;
    for (let i = 0; i < myCalculation.length; i++) {
        sum += myCalculation[i];
        console.log(sum);
    }
    return sum;
}

function getSubtracted() {
    let sum = 0;
    for (let i = myCalculation.length - 1; i >= 0; i--) {
        sum += myCalculation[i];
        console.log(sum);
    }
    return sum;
}

addNumber(1);
addNumber(1);
addNumber(1);
addNumber(1);
getSum();
getSubtracted();