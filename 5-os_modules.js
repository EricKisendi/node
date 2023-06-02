const os = require('os');

//info about the user
const user = os.userInfo()
console.log(user);

//system uptime in seconds
console.log(`System up time is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);