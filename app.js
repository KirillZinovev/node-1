const path = require("path");
const fs = require("fs");
// console.log("Название файла: ", path.basename(__filename));
// console.log("Название каталога: ", path.dirname(__filename));
// console.log("Расширение: ", path.extname(__filename));
// fs.mkdir(path.join(__dirname, "tmp"), function (err) {
//   if (err) {
//     console.error(err);
//   }
//   console.log("Папка создана");
// });
const filePath = path.join(__dirname, "tmp", " 2 txt");
console.log(filePath);
fs.writeFile(filePath, "\nSomething is wrong in the file", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("Папка создана");
});
fs.appendFile(filePath, "\nSomething went wrong with the file", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("Папка создана");
});
fs.readFile(filePath, "UTF-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
