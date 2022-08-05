let log = console.log;

let peopleArr = [];

const namesData = [
    ["Jake"],
    ["Jim"],
    ["Jay"],
    ["John"],
    ["Jess"],
    ["Jen"],
    ["Joe"],
    ["Jazzy"],
    ["Alice"],
    ["Erin"],
    ["Chad"],
    ["Chris"],
    ["Ricardo"],
    ["Branden"],
    ["Odin"],
    ["Johnathan"],
    ["Branden"],
    ["Ashley"],
    ["Jacob"],
    ["Jeremy"],
    ["Joey"],
    ["Jill"],
    ["Judith"]
]

function addData(amountN) {

    for (let i = 0; i <= amountN; i++) {
        peopleArr[i] = [i, namesData[Math.floor(Math.random() * namesData.length)]];
        //  For Debugging
        //  log("Test vals: " + peopleArr[i]);
    }

    return peopleArr;

}

addData(100000);

log(peopleArr);

function removeData(amountZ) {

    for (let i = 0; i <= amountZ; i++) {

        //  For Debugging
        //  log("Test vals: " + peopleArr[i]);

        peopleArr.splice(amountZ);

    }

    return peopleArr;

}

removeData(50);

log(peopleArr);