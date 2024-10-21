const toSwitch = document.getElementById("demo");

toSwitch.innerHTML = "At least the Javascript file is called...";

// $.ajax({
//     url:"files_Resume/Thermodynamique_01_Resume.pdf",
//     type:'HEAD',
//     error: function()
//     {
//         toSwitch.innerHTML = "File does not exist";
//     },
//     success: function()
//     {
//         toSwitch.innerHTML = "File does exist !";
//     }
// });



// const testFolder = './files_Resume/';
// const fs = require('fs');

// fs.readdirSync(testFolder).forEach(file => {
//   console.log(file);
//   toSwitch.innerHTML = "Files scanned !";
// });


var d = new Date(2013, 12, 5, 16, 23, 45, 600);
var generatedFile = new File(["Rough Draft ...."], "Draft1.txt", {type: 'text/plain', lastModified: d});

console.log(typeof generatedFile.name == 'string'); // true



// function executeIfFileExist(src, callback) {
//     var xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function() {
//         if (this.readyState === this.DONE) {
//             callback()
//         }
//     }
//     xhr.open('HEAD', src)
// }