const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');



console.clear();

crearArchivoTabla(argv.base, argv.listar, argv.hasta)
  .then(nombreArchivo => console.log(nombreArchivo.bgMagenta, 'Creado Exitosamente'.bgCyan))
  .catch((err) => console.log(err));

