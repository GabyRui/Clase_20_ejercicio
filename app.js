//PREGUNTA 1: INCLUDES------------------------------------.....................................

//Con strings

const animes = ['inu', 'yasha', 'akame', 'ga', 'kill'];

const animesResultado = animes.includes('akame');
console.log(animesResultado);

//con objetos

const animes2 = [
    {id: 1, anime:'hunter', year: 1994},
    {id: 2, anime:'mirai', year: 2012},
    {id: 3, anime:'komisan', year: 2020},
]

const animes2Resultado = animes2.some((anime => anime.anime === 'hunter'))

console.log(animes2Resultado);

//PREGUNTA 2: FINDINDEX--------------------------------------------------------------

const animeFavorite = 'HunterxHunter';
const animeFind = animes2.findIndex ((anime => anime.anime === animeFavorite));

console.log(animeFind);

//El presente ejemplo arrojó en la consola -1 debido a que no ubica el elemento en los componentes del arreglo.

//PREGUNTA 3: FIND--------------------------------------------------------------

const nameNewNaruto = animes.find((anime =>
    anime.year === 'Naruto'));
    console.log(nameNewNaruto);


//PREGUNTA 4: FILTER--------------------------------------------------------------

const animeYear = animes2.filter ((anime) =>
    anime.id === 2 && anime.anime ==='mirai' && anime.year === 2012)
console.log(animeYear);


 //PREGUNTA 5: EVERY--------------------------------------------------------------

 const años = [1990, 1993, 1998, 2012];

 const añosResultado = años.every((number =>
    number % 2 === 0));

console.log(añosResultado);


//El ejemplo arroja false debido a que hay un número que no es múltiplo de 2, en este caso, el infiltrado sería 1993.