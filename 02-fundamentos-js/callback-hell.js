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
]

const id = 3;

const getEmpleado = (id, callback) =>{
  const empleado = empleados.find( (e) => e.id === id)?.nombre;

  if (empleado) {
    callback (null, empleado);
  }else{
    callback(`Empleado con id ${id} no existe`) ;
  }
};

const getSalario = (id, callback) => {



  const salario = salarios.find( (e) => e.id === id )?.salario;

  if (salario) {
    callback(null, salario);
  }else{
    callback(`El salario del id ${id} no existe`)
  }

};

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log('Error');
    console.log(err);
    return;
  }
  
  getSalario(id, (err, salario) => {
  if (err) {
    return console.log(err);
  }
  
  console.log('El empleado:', empleado, ' tiene un salario de: ' , salario);
});

});

