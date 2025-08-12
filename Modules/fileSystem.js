import fs, { appendFileSync } from "fs";

//read

// const result = fs.readFileSync("data.txt" , "utf8");

// console.log(result)

//read - Image

// const image = fs.readFileSync("mamaVanja.jpg" , "base64");

// console.log(image);

 
//Write
fs.writeFileSync("myFile.txt", "This file is newly created.");

fs,appendFileSync("myfile.txt", "Ok lets update a file in this directory!!")

