const argv = require('yargs')
                .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'base de la tabla de multiplicar'
                })
                .check( (argv, options) =>{
                        if (isNaN(argv.b)) {
                                throw 'La base tiene que ser un numero'
                        }return true;
                })
                .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                })
                .option('n', {
                    alias: 'numeroLimite',
                    type: 'number',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla de multiplicar hasta el numeroLimite'
                })
                .check( (argv, options) =>{
                    if (isNaN(argv.n)) {
                            throw 'El numeroLimite tiene que ser un numero'
                    }return true;
            })
                .argv;

module.exports ={argv};