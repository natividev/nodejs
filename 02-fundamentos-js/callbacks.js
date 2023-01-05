
// Es una funcion que se va a ejecutar en un tiempo determinado
// setTimeout( () => {
//   console.log('Hola mundo');
// }, 1000);

// * Callback no es mas que una funcion que se manda como argumento a otra función.

const getUsuarioById = (id, callback) =>{
  const usuario = {
    id,
    nombre: 'Nativdad',
  }

  setTimeout(() => {
    callback(usuario);
  }, 1500);

};

getUsuarioById(10, (usuario) => {
  console.log( usuario.id );
  console.log( usuario.nombre.toUpperCase() );
});
