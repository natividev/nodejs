const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar, hasta) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
      console.log('Hastaaa', hasta);
    }

    if (listar) {
      console.log('================='.green);
      console.log(' Tabla del:'.cyan, colors.cyan(base));
      console.log('================='.green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    nombreArchivo = (`tabla-${base}.txt`);
    return nombreArchivo;

  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivoTabla
};