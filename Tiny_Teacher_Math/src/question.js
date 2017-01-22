const array = [];

function constructJSON(key, value) {
    var jsonObj = {}
    jsonObj[key] = value;
    return jsonObj;
}

for (var i = 0; i < 100; i++) {
    var tableLimit = 12;
    var upperLimit = 144;
    var rand1 = Math.floor(Math.random() * tableLimit);
    var rand2 = Math.floor(Math.random() * tableLimit);
    var questionString = 'What is r1 times r2?';
    questionString = questionString.replace('r1', rand1);
    questionString = questionString.replace('r2', rand2);
    var correct = (rand1 * rand2) + '';
    var incorrect1 = Math.floor(Math.random() * upperLimit) + '';
    var incorrect2 = Math.floor(Math.random() * upperLimit) + '';
    var incorrect3 = Math.floor(Math.random() * upperLimit) + '';
    var value = [correct, incorrect1, incorrect2, incorrect3];
    var randomQ = constructJSON(questionString, value);
    array.push(randomQ);
}

module.exports = array;
