const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// info about system uptime in seconds
console.log(`System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    'OS Name' : `${os.version()}`,
    'Total Memory' : os.totalmem(),
    'CPU' : os.cpus(),
    'Platform' : `${os.platform}`,
    'Host Name' : `${os.hostname()}`
}
console.log(currentOS)