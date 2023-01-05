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

const id = 3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch( (err) =>  console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch( (err) => console.log(err));

// getEmpleado(id)
// .then(empleado => {
//   getSalario(id)
//   .then(salario =>{
//     console.log('El empelado:', empleado, ' tiene un salaio de: ', salario);
//   })
//   .catch( ( err ) => console.log(err));
// })

let nombre;

// * Promesas en cadena
getEmpleado(id)
    .then(empleado => {
      nombre = empleado;
      return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de: ${salario}`))
    .catch( (err) => console.log(err));