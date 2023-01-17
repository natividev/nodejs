/**
 * _listado
 * { 'uuid-125-155-' { id:12 descripcion:asc, completado: 954 } }
 */
const Tarea = require('./tarea');
require('colors');

class Tareas {

  _listado = {};

  get listadoArray() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea)
    });
    return listado;

  }

  constructor() {
    this._listado = {};
  }

  borrartarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }



  cargarTareaFromArray(tareas = []) {
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea;
    })
  }

  crearTarea(descripcion = '') {
    const tarea = new Tarea(descripcion);
    this._listado[tarea.id] = tarea;

  }

  listadoCompleto() {
    // 1: en verde
    // Completa: verde
    // Pendiente: rojo
    // 1. Alma :: Completada | Pendiente

    console.log();

    this.listadoArray.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { descripcion, completadoEn } = tarea;

      const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;

      console.log(`${idx} ${descripcion} :: ${estado}`);


      // if (tarea.completadoEn != null) {
      //   console.log(`${idx} ${tarea.descripcion} :: ${'Completada'.green}`);
      // }
      // console.log(`${tarea.descripcion} :: ${'Pendiente'.red}`);
    });
  }

  listarPendientesCompletdas(completadas = true) {
    console.log();
    let contador = 0;

    this.listadoArray.forEach((tarea) => {
      const { descripcion, completadoEn } = tarea;

      const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;

      if (completadas) {
        //Mostrar Completadas
        if (completadoEn) {
          contador += 1;
          console.log(`${(contador + '.').green} ${descripcion} :: ${completadoEn.green}`);
        }
      } else {
        //Mostrar Pendiente
        if (!completadoEn) {
          contador += 1;
          console.log(`${(contador + '.').green}  ${descripcion} :: ${estado}`);
        }

      }




    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach(id => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArray.forEach(tarea => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });

  }



}

module.exports = Tareas;