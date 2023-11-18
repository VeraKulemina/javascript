 function printName(name: {first: string, last: string}) {
    return `${name.first} ${name.last}`;
 }

 //type aliases

 type Point = {x: number, y: number};
 

 //intersection type 

 type Circle = {
   radius: number;
 }

 type Combain = Point & Circle;

 const combains = {
   x: 2,
   y: 3,
   radius: 4
 }
