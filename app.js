

// for(let i= 0; i <4; i++){
//     console.log(i);
//     if(i === 3){
//         break
//     }
// }

// const lop = [1,2,3];

// for(let item of lop){
//     console.log(item)
// }

// for loop and objects

// const movie = {
//     Arrival: 9.5,
//     Alien: 9.0,
//     Amelie: 9
// }

// // console.log(Object.keys(movie));
// // console.log(Object.values(movie));

// // for(let m of Object.keys(movie)) {
// //     console.log(m, movie[m]);
// // }

// for( let m in movie){
//     console.log(m);
// }

// function isPurple(color){
//     return color.toLowerCase() === 'purple'
        
// }

// function isValidPassword(password, username){
//     return password.length >= 8 && 
//         password.indexOf(" ") === -1 && 
//         password.indexOf(username) === -1
// }


// let sum = 0;
// let avg = 0
// function getAvarage(array){
//     for(let i=0; i<array.length; i++){
//         sum += array[i];
//     }
    
//     return avg = sum/array.length;
// }

const alphabetArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let str = "The quick brown fox jumps over the lazy dog";

function isPangram(str) {
    console.log('hi');
}

function outer() {
  let movie = "amadeus";
  function inner() {
    console.log(movie.toUpperCase())
  }
  inner();
}