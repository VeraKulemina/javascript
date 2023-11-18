 function printName(name: {first: string, last: string}) {
    return `${name.first} ${name.last}`;
 }

 //type aliases

 type Point = {x: number, y: number};
 

 //intersection type 

 type Circle = {
   radius: number;
 }

 type Combain = Point & Circle & {age: number;}

 const combains = {
   x: 2,
   y: 3,
   radius: 4
 }

 type Movie ={
   readonly title: string,
   originalTitle?: string,
   director: string,
   releaseYear: number,
   boxOffice: {
      budget: number,
      grossUS: number,
      grossWorld: number
   },
 }

 function getProfit ( movie : Movie) : number {
   return movie.boxOffice.grossWorld - movie.boxOffice.budget;
 }

 //alternative syntax for defining arrays

 let names: Array<string> = ["hello", "world"];

 let ages:number[] = [3, 4];

 const gameBoard:string[][] = []; // two domentional array

//union type 

let age:number | string = 0;

function pringAge(age:number | string):void {
   console.log(`${age} years`);
}

//union types for arrays 

const stuff: (number | string)[] = [];


