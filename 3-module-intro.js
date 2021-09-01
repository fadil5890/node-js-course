// CommonJS
const names = require('./module-intro/variables');
const sayHi = require('./module-intro/functions');
// ES6
// import names from './module-intro/variables';
// import sayHi from './module-intro/functions';

sayHi('Fadil')
sayHi(names.name)
sayHi(names.number)

require('./module-intro/evoking-functions');

