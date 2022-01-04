const {crearTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log(argv);

crearTabla(argv.b, argv.l, argv.h)
    .then(resultado => console.log(resultado .rainbow))
    .catch(err => console.log(err));
