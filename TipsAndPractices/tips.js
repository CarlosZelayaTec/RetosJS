
/**
 ** Crea un array a partir de un iterable; 
*/
const palabra = "Carlos";

const casiArray = Array.from(palabra); 
const otroCasiArray = [...palabra]; //Este es equivalente al anterior

// console.log(casiArray);
// console.log(otroCasiArray);


/**
 **  Convierte los elementos de un array en una cadena.
 */

const heroes = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

// console.log(`En la Liga de la justicia podemos encontrar a ${heroes.toString()}`)

const datos = [new Date(), 12000.43]

// console.log(`Mis datos son: ${datos.toString()}`)
// console.log(`Mis datos en locale son: ${datos.toLocaleString()}`)

/**
    **Objeto Date()
*/

// const ahorita = new Date();
// console.log(`La fecha es: ${ahorita}`);
// console.log(`La fecha en timestamp es: ${ahorita.getTime()}`)
// console.log("==== FECHA ====");
// console.log(`El año: ${ahorita.getFullYear()}`); // 4 digitos
// console.log(`El mes: ${ahorita.getMonth()}`); // 0 - 11
// console.log(`El día de la semana: ${ahorita.getDay()}`); // 0 - 6 (D - S)
// console.log(`El día del mes: ${ahorita.getDate()}`); // 1-31
// console.log("==== HORA ====");
// console.log(`Horas: ${ahorita.getHours()}`);
// console.log(`Minutos: ${ahorita.getMinutes()}`);
// console.log(`Segundos: ${ahorita.getSeconds()}`);
// console.log(`milisegundos: ${ahorita.getMilliseconds()}`);

//* Con UTC */
// const ahoritaUTC = new Date();
// console.log("Con UTC: ");
// console.log(`La fecha en timestamp ya es UTC: ${ahoritaUTC.getTime()}`)
// console.log("==== FECHA ====");
// console.log(`El año: ${ahoritaUTC.getUTCFullYear()}`); // 4 digitos
// console.log(`El mes: ${ahoritaUTC.getUTCMonth()}`); // 0 - 11
// console.log(`El día de la semana: ${ahoritaUTC.getUTCDay()}`); // 0 - 6 (D - S)
// console.log(`El día del mes: ${ahoritaUTC.getUTCDate()}`); // 1-31
// console.log("==== HORA ====");
// console.log(`Horas: ${ahoritaUTC.getUTCHours()}`);
// console.log(`Minutos: ${ahoritaUTC.getUTCMinutes()}`);
// console.log(`Segundos: ${ahoritaUTC.getUTCSeconds()}`);
// console.log(`milisegundos: ${ahoritaUTC.getUTCMilliseconds()}`);

/**
 ** Generadores
 */

  function* funcionGeneradora() {
    for(let i = 1; i <= 3; i += 1) {
      yield i;
    }
    return 'final';
  }
  const generador = funcionGeneradora()
  
  for(const valor of generador) {
    // Esto directamente imprimirá el valor, no el objeto con valur y done
    // console.log(valor)
  }

  // Destructuring

const heros = ['batman', 'superman', 'wonderwoman', 'shazam', 'aquaman']

const [batman] = heros;
console.log(batman);

  //ciclos de repetición
// const objeto = { a: 1, b: 5, c: 10}
// for (const clave in objeto){
//   console.log(clave, objeto[clave])
// }

// const iterable = [ 1, 5, 10]
// for (const valor of iterable){
//    console.log(valor)
// }

// iterable.forEach((x) => {
//   console.log(x);
// })