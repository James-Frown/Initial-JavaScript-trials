let log = console.log;

const test1 = {
    name: "james",
    surName: "brown"
}

const test2 = [
    name = "dean",
    surName = "machine"
]

const classRoom1 = [test1, test2];

const classRoom2 = {
    Students: {
        test1,
        test2
    }
}

log(classRoom1);
log(classRoom2);