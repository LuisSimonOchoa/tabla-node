const fs = require('fs');
const colors = require('colors');

const crearTabla = async (base = 5, listar = false, hasta = 20) => {
    try {
        let salida = '';
        let salida1 = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x' .green} ${i} ${'=' .green} ${base * i}\n`;
            salida1 += `${base} x ${i} = ${base * i}\n`;
        }
        if(listar) {
            console.log('================' .brightCyan);
            console.log(' Tabla del:' .brightCyan, colors.yellow(base));
            console.log('================' .brightCyan);
            console.log(salida);
        }
        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida1);
        return `tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearTabla
}

