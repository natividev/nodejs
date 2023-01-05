const empleados = [
  {
    id: 1,
    nombre: 'Fernando'
  },
  {
    id: 2,
    nombre: 'Natividad'
  },
  {
    id: 3,
    nombre: 'Carlos'
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000, 
  },
  {
    id: 2,
    salario: 1500, 
  },
];

const getEmpleado = (id) => {
  return promesa = new Promise( (resolve, reject) => {
    
    const empleado = empleados.find( (e) => e.id === id)?.nombre;

    if (empleado) {
      resolve(empleado)
    }else{
      reject( `No existe empleado con el id ${id}` )
    }
  });
};

const getSalario = (id) => {
  return promesa = new Promise( (resolve, reject) => {
    const salario = salarios.find( (e) => e.id === id)?.salario;

    if (salario) {
      resolve(salario);
    }else{
      reject(`No existe el salario con el id ${id}`);
    }
  });

};
// * Async - Await
// * Await: Ok JavaScript esperate hasta que tengas la respuesta de la promesa se lo asignas donde sea que lo necesita, el unico detalle de usar el await es que tiene que estar dentro de una funcion, o metodo asintrono

// * async: Transforma mi funcion en funcion asincrona, en pocas palabras retorna una promesa

const id = 3;

const getInfoUsuario = async (id) =>{

  try {    
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado : ${empleado} es de ${salario}`;
    
  } catch (error) {
    throw error;
  }

};

getInfoUsuario(id)
.then( (msg) => console.log(msg))
.catch( (error) => console.log(error));
