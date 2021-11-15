// Iteración #1: Arrows
// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.
// let funcionFlecha = (a =10, b=5) => console.log (a + b);
// 1.1 Ejecuta esta función sin pasar ningún parametro
// funcionFlecha();
// 1.2 Ejecuta esta función pasando un solo parametro
// funcionFlecha(2);
// 1.3 Ejecuta esta función pasando dos parametros
// funcionFlecha(2,4);

// Iteración #2: Destructuring
// 2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

// const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
// let {title, gender, year} = game;

// console.log (title);
// console.log (gender);
// console.log (year);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.

// const fruits = ['Banana', 'Strawberry', 'Orange'];
// const [fruit1, fruit2, fruit3] = fruits;

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

// const animalFunction = () => {
//     return {name1: 'Bengal Tiger', race: 'Tiger'}
// };

// let {name1, race} = animalFunction();
// console.log(name1);
// console.log(race);

// 2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

// const car = {name2: 'Mazda 6', itv: [2015, 2011, 2020] }

// let {name2, itv} = car;
// console.log(name2);
// console.log(itv); 

// let [anno1, anno2, anno3] = car.itv;
// console.log (anno1);
// console.log (anno2);
// console.log (anno3);

// Iteración #3: Spread Operator
// 3.1 Dado el siguiente array, crea una copia usando spread operators.
// const pointsList = [32, 54, 21, 64, 75, 43]
// const copiaPointsList =[...pointsList];
// console.log(copiaPointsList);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// const copiaToy = {...toy};
// console.log(copiaToy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
// const pointsList1 = [32, 54, 21, 64, 75, 43];
// const pointsList2 = [54,87,99,65,32];
// const nuevoArray = [...pointsList1,...pointsList2]
// console.log(nuevoArray);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
// const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
// const nuevoObjeto = {...toy2,...toyUpdate};
// console.log(nuevoObjeto);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operator.
// const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
// const  [primerElemento, , ...restoElementos] = colors;
// const colors2 = [primerElemento, ... restoElementos];
// console.log(colors2);

// Iteración #4: Map
// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];

// let usersName = users.map(user => (user.name))
// console.log(usersName);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
// const users2 = [
// 	{id:1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];

// let usersName2 = users2.map(user2 => {
//     if (user2.name.charAt(0) === 'A' ) {
//     return 'Anacleto'
// } else return user2.name;
// })

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
// const cities = [
// 	{isVisited:true, name: 'Tokyo'}, 
// 	{isVisited:false, name: 'Madagascar'},
// 	{isVisited:true, name: 'Amsterdam'}, 
// 	{isVisited:false, name: 'Seul'}
// ];
// let ciudadVisitada = cities.map(city => {
//     if (city.isVisited === true) {
//         return (city.name + ' Visitado')
//     } else return city.name;
// });
// console.log(ciudadVisitada)

// Iteración #5: Filter
// // 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
// let mayoresEdad = ages.filter(edad => {
// 	return edad >= 18
// })

// // 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
// let edadesPares = ages.filter(edad => {
// 	return edad % 2 == 0;
// })

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// const streamers3 = streamers.filter(streamer =>  streamer.gameMorePlayed === 'League of Legends');
// console.log(streamers3);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
// const streamer4 = streamers.filter(streamer4 => streamer4.name.includes('u'));
// console.log(streamer4);

PENDIENTE// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamer5 = streamers.filter(streamer5 => {
	return streamer5.gameMorePlayed.includes('Legends')});
console.log(streamer5)

PENDIENTE// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

PENDIENTE// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.











