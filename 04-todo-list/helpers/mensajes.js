
require('colors');

const mostrarMenu = () => {
  return new Promise(resolve => {
    console.clear()
    console.log('========================='.green);
    console.log('  Seleccione una opcion  '.green);
    console.log('=========================\n'.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Lista tareas completadas`);
    console.log(`${'4.'.green} Lista tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir\n`);

    // * Recibir informacion del usuario
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readLine.question('Seleccione una opción:', (opt) => {
      readLine.close();
      resolve(opt);
    });

  });
}

const pausa = () => {
  return new Promise(resolve => {
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readLine.question(`\nPrecione ${'ENTER'.green} para continuar\n`, (opt) => {
      readLine.close();
      resolve();
    })
  });
}

module.exports = {
  mostrarMenu,
  pausa

}