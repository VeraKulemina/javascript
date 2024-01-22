

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

const movie = {
    Arrival: 9.5,
    Alien: 9.0,
    Amelie: 9
}

// console.log(Object.keys(movie));
// console.log(Object.values(movie));

// for(let m of Object.keys(movie)) {
//     console.log(m, movie[m]);
// }

for( let m in movie){
    console.log(m);
}

function isPurple(color){
    return color.toLowerCase() === 'purple'
        
}