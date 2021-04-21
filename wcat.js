// input -> ??
let fs = require("fs");
let input = process.argv.slice(2);

console.log("input", input);

let options = [];
let filePaths = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] == "-s" || input[i] == "-b" || input[i] == "-n")
    options.push(input[i]);
  else filePaths.push(input[i]);
}

console.log("options", options);
console.log("filepath", filePaths);

for (let i = 0; i < filePaths.length; i++) {
  let isFilePresent = fs.existsSync(filePaths[i]);
  if (isFilePresent == false) {
    console.log(`filepath ${filePaths[i]} does not exists.`);
    return;
  }
}

let totalContent = "";
for (let i = 0; i < filePaths.length; i++) {
  let contentOfCurrent = fs.readFileSync(filePaths[i]);
  totalContent += contentOfCurrent + "\n";
}

let isSoption = options.includes("-s");
if (isSoption) {
  let outputArr = totalContent.split("\r\n");
  //   console.log(output);
  let tempArr = [];
  for (let i = 0; i < outputArr.length; i++) {
    let isElementValid = outputArr[i] !== "";
    if (isElementValid) {
      tempArr.push(outputArr[i]);
    }
  }
  outputArr = tempArr;
  console.log(outputArr);
  totalContent = tempArr.join("\r\n");
}

// console.log(totalContent);

let isN = options.includes("-n");

if (isN == true) {
  let count = 1;
  let contentArr = totalContent.split("\r\n");
  for (let i = 0; i < contentArr.length; i++) {
    contentArr[i] = count + ". " + contentArr[i];
    count++;
  }
  totalContent = contentArr.join("\r\n");
}
console.log(totalContent);
