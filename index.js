function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

var num = 0;
function takeANumber2() {
  var line = [];
  num = num + 1;
  console.log(`Hello. You're ticket number is ${num}.`);
  return num;
}
takeANumber2();
takeANumber2();
takeANumber2();

function nowServing(line) {
  if (line.length) {
    var current = line.shift();
    return `Currently serving ${current}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var string = "The line is currently:";
  var thisLine = [];
  if (line.length) {
    for (let i = 0; i < line.length; i++) {
      var personAndPlace = ` ${i + 1}. ${line[i]}`;
      thisLine.push(personAndPlace);
    }
    return string.concat(thisLine.toString());
  } else {
    return "The line is currently empty.";
  }
}