require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');


const main = async () => {
  let opt = '';
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    //* CargarTarea
    tareas.cargarTareaFromArray(tareasDB);
  }



  do {
    // * Imprimir el menu
    opt = await inquirerMenu();
    console.log({ opt });

    switch (opt) {
      case '1':
        // Crear opcion
        const descripcion = await leerInput('Descripción:');
        tareas.crearTarea(descripcion);

        break;
      case '2':
        // Listado
        tareas.listadoCompleto();
        break;
      case '3':
        // Listar tareas completadas
        tareas.listarPendientesCompletdas(true);
        break;
      case '4':
        // Listar tareas incompletas
        tareas.listarPendientesCompletdas(false);
        break;
      case '5':
        // Completado | Pendiente
        const ids = await mostrarListadoChecklist(tareas.listadoArray);
        tareas.toggleCompletadas(ids)
        //console.log({ ids });
        break;

      case '6':
        // Borrar
        const id = await listadoTareasBorrar(tareas.listadoArray);
        // TODO: Preguntar si está seguro de borrar
        if (id !== '0') {
          const ok = await confirmar('¿Está seguro de borrar?')
          if (ok) {
            tareas.borrartarea(id);
            console.log('Tarea borrada');
          }
        }
        break;
    }

    guardarDB(tareas.listadoArray);

    await pausa();
  } while (opt !== '0');

};


main();