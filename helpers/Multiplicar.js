
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5 , listar = false, numeroLimite = 1) => {

    try {
        
        let salida = "";

        for(let i=0; i<= numeroLimite; i++) {
                salida += `${base} x ${i} = ${base * i} \n`;
        };

                fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
                
                if (listar) {
                    console.log(colors.yellow("=============="));
                    console.log(colors.blue("Tabla del", base));
                    console.log(colors.red("=============="));
                    console.log(salida.rainbow)
                }
                
                return (`tabla-${base}.txt creada`);
    } catch (error) {
        throw error;
    }
    
           
   

}

module.exports = {
    crearArchivo
}