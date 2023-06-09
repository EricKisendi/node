const {readFile} = require('fs');

console.log('Starting First Task');
readFile('./content/first.txt','utf8',(err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result)
    console.log('Completed first task');
})
console.log('This is an immediete task');