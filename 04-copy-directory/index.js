const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const filePathFrom = path.join(__dirname, 'files')
const filePathDest = path.join(__dirname, 'files-copy')

fs.readdir(filePathFrom, (err, files) => {
  if (err)
    console.log(err);
  else {
    fsPromises.mkdir(filePathDest, { recursive: true })
    files.forEach(file => {
      fsPromises.copyFile(`${filePathFrom}\\${file}`, `${filePathDest}\\${file}`)
    })
  }
})