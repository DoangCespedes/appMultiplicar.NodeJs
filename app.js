const { options } = require('yargs');
const {crearArchivo} = require('./helpers/Multiplicar')
const {argv} = require('./config/yargs')
const colors = require('colors');

console.clear()
console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);



crearArchivo(argv.b, argv.l, argv.n)
        .then(nombreArchivo => console.log(colors.blue( nombreArchivo, 'creado')))
        .catch(err => console.log(err))