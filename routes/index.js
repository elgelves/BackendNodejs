const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO tracks.js
    return fileName.split('.').shift()
}

// rreddirSync :Leer el directorio de manera asincrona

fs.readdirSync(PATH_ROUTES).filter((file) => {
   const name = removeExtension(file) // TODO index, tracks
   if(name !== 'index'){
       router.use(`/${name}`, require(`./${file}`)) //TODO Http://localhost:3000/api/tracks
   }
});



module.exports = router