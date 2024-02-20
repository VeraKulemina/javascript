

//sort();

// const books = [
//   {
//     author: "Jane Doe",
//     bookName: "The Mystery of the Enchanted Forest",
//     genre: "Mystery",
//     rating: 4.5
//   },
//   {
//     author: "John Smith",
//     bookName: "Adventures in Space",
//     genre: "Science Fiction",
//     rating: 3.8
//   },
//   {
//     author: "Alice Johnson",
//     bookName: "Love in the Time of Rain",
//     genre: "Romance",
//     rating: 4.2
//   },
//   {
//     author: "Bob Williams",
//     bookName: "Coding Chronicles",
//     genre: "Technology",
//     rating: 4.9
//   }
// ];

// // const ascSort = books.sort((a, b) => a.rating - b.rating);
// // const descSort = books.sort((a, b) => b.rating - a.rating);
// const nums = [3,4,5,6,7, 3, 49]
// const redused = nums.reduce((acc, book) => acc + book, 100)

// const maxVal = nums.reduce((max, curVal) => {
//   if (curVal > max) return curVal;
//   return max
// })

// const maxVal2 = nums.reduce((max, curVal) => {
//   return Math.max(max, curVal)
// })

// const minVal = nums.reduce((max, curVal) => {
//   return Math.min(max, curVal)
// })

// //tallynig

// const votes = ["y", "n", "y", "n", "y", "y", "y","y", "n","n","n","n"]

// // const results = votes.reduceRight((tally, current) => {
// //   if(tally[current]) {
// //     tally[current] ++;
// //   } else {
// //     tally[current] = 1;
// //   }
// //   return tally
// // }, {})

// const results = votes.reduce((tally, current) => {
//   tally[current] = (tally[current] ||  0 ) +1;
//   return tally;
// }, {})

// const groupedBooks = books.reduce((group, book) => {
//   const key = Math.floor(book.rating);
//   if(!group[key]) group[key] = []
//   group[key].push(book)
//   return group;
// }, {})

// //spread 

// Math.max(...nums)

// let str = "helloworkld"

// const arr = [... str];

// const obj = {...nums};

// const strObj = {..."helloworkld"}

// //rest

// // function sum() {
// //   const args = [...arguments];
// //   return args.reduce((sum, arg) =>{
// //     return sum + arg;
// //   })
// // }

// function sum(...nums) {
// return nums.reduce((total, curVal)=> {
//   return total + curVal;
// })}

// // distructuring an arryas

// const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry'];

// // const colors = [green, yellow, orange] = fruits;

// // const colors = [green, yellow, , ,red] = fruits;
// const colors = [green, ...others] = fruits;


// //short hand properties

// //computed properties

// const role = "host";
// const person = "Jools Holland";
// const role2 = "Director";
// const person2 = "James Cameron";

// const team = {
//   [role]: person, 
//   [role2]: person2
// }

// //methods for objects


// // const math = {
// //   add: function(x,y){
// //     return x +y;
// //   },
// //   multiply: function(x, y){
// //     return x* y;
// //   }
// // }

// //shorthand methods syntax for objects

// // const math = {
// //   add(x,y){
// //     return x +y;
// //   },
// //   multiply(x, y){
// //     return x* y;
// //   }
// // }
// // //this 


// this 

const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't stop, Won't stop"], 
  pickPrase(){
    const {phrases} = this;
    const ind = Math.floor(Math.random() * phrases.length)
    return phrases[ind]
  },
  start(){
    this.timerId = setInterval(() => {
      console.log(this.pickPrase())
    }, 3000)
  },
  stop(){
    clearInterval(this.timerId);
    console.log("PHEW ITS OVER")
  }

}