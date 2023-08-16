const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog2.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNCK -----");
  console.log(chunk);
  writeStream("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
