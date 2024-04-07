const fs = require("fs");
const imagePath = "D:\\Pictures\\genshin-bg\\yelan-bg.png";

const Base64Image = fs.readFileSync(imagePath, "base64");

console.log(Base64Image);
