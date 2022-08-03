let log = console.log;

const namesData = [
    ["Jake"]
    ["Jim"]
    ["JJ"]
    ["John"]
    ["Jess"]
    ["Jen"]
    ["Joe"]
    ["Jazzy"]
]

let peopleArr = [];

function addData(amountN) {

    for (let i = 0; i <= amountN; i++) {

        peopleArr[i] += namesData[i];
        log(peopleArr);
    }

    return peopleArr;

}

addData(10);

log(peopleArr);