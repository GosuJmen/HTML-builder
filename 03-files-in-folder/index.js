const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'secret-folder')

fs.readdir(filePath, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      fs.stat(`${filePath}\\${file}`, (error, stats) => {
        if (error) {
          console.log(error);
        }
        else if(stats.isFile()) {
          console.log(`${path.parse(file).name} - ${path.parse(file).ext.slice(1)} - ${(stats.size/1024).toFixed(3)}kb`);
        }
      });
    })
  }
})