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

// console.log("options", options);
// console.log("filepath", filePaths);

for (let i = 0; i < filePaths.length; i++) {
  let isFilePresent = fs.existsSync(filePaths[i]);
  if (isFilePresent == false) {
    console.log(`filepath ${filePaths[i]} does not exists.`);
    return;
  }
}

// read content from file paths
let totalContent = "";
for (let i = 0; i < filePaths.length; i++) {
  let contentOfCurrent = fs.readFileSync(filePaths[i]);
  totalContent += contentOfCurrent + "\r\n";
}

let isSoption = options.includes("-s");
// to implement -s remove empty line breaks
if (isSoption) {
  // split on the basis of line breaks
  let contentArr = totalContent.split("\r\n");
  // identify and remove the empty line breaks
  let tempArr = [];
  for (let i = 0; i < contentArr.length; i++) {
    let isElementValid = contentArr[i] !== "";
    if (isElementValid) {
      tempArr.push(contentArr[i]);
    }
  }
  totalContent = tempArr.join("\r\n");
}

// console.log(totalContent);

// put a number to every line
let isN = options.includes("-n");
let isB = options.includes("-b");
let finalOption;

if (isN == true) {
  if (isB == true) {
    // option that comes first that would be the final one
    let idxB = options.indexOf("-b");
    let idxN = options.indexOf("-n");
    finalOption = idxB < idxN ? "-b" : "-n";
  } else {
    finalOption = "-n";
  }
} else if (isB == true) {
  finalOption = "-b";
}

if (finalOption == "-n") {
  let count = 1;
  let contentArr = totalContent.split("\r\n");
  for (let i = 0; i < contentArr.length; i++) {
    contentArr[i] = count + ". " + contentArr[i];
    count++;
  }
  totalContent = contentArr.join("\r\n");
  // console.log(contentArr);
}
if (finalOption == "-b") {
  let count = 1;
  let contentArr = totalContent.split("\r\n");
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] !== "") {
      contentArr[i] = count + ". " + contentArr[i];
      count++;
    }
  }
  totalContent = contentArr.join("\r\n");
  // console.log(contentArr);
}

console.log(totalContent);
