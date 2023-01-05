const deadpoll = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  //edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder} `;
  }
}

// const nombre = deadpoll.nombre;
// const apellido = deadpoll.apellido;
// const poder = deadpoll.poder;
// console.log(nombre, apellido, poder);

function imprimiHeroe({nombre, apellido, poder, edad = 0}) {
  
  // * Desestructuración
  //const {nombre, apellido,poder, edad = 0} = heroe;
  console.log(nombre, apellido, poder,edad);
  
  
}

// imprimiHeroe(deadpoll);

// * Desestructuración de arreglos
const heroe = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroe[0];
// const h2 = heroe[1];
// const h3 = heroe[2];

const [ , , h3] = heroe;

console.log(h3);