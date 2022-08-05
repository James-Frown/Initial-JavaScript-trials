// basic upkeep method

let log = console.log;

// end container

let endArr = [];

// constant data-set

const dataSet = [
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

// function to populate data

function addData(amountN) {

    // parameters = amount of random data wanted

    // repeating for parameter

    for (let i = 0; i <= amountN; i++) {

        // creating element to add to array

        endArr[i] = dataSet[Math.floor(Math.random() * dataSet.length)];

        //  For Debugging individual entaties

        endArr[i] += "@gmail.com";

        //  log("Test vals: " + peopleArr[i]);
    }

    return endArr;

}

addData(1000);

log(endArr);