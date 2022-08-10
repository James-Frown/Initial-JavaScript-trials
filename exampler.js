let log = console.log;

let responsesArr = [];

let contact = "";

let comment = "";

let val = false;

let id;

let response = [id, val, comment, contact];

function addResponse(valVar, commentVar, contactVar) {

    for (i = 0; i <= responsesArr.length; i++) {

        response = [i, valVar, commentVar, contactVar];

        responsesArr[i] = response;

    }

    return responsesArr;
    log(responsesArr);

}

addResponse(true, "i love this web site", "me@gmail.com");