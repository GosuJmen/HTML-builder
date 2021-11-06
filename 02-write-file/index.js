const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '', 'text.txt')
const output = fs.createWriteStream(filePath);

stdout.write('Ведите данные для записи\n')
stdin.on('data', data => {
    output.write(data)
});