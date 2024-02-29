// To select the element with id of bear-photo:
const img = document.getElementById('bear-photo')
console.dir(img)

//To select the element with id of main:
document.getElementById('main')

//getElementsByTagName

const inputs = document.getElementsByTagName("input")

//getElementsByClassName

const header = document.getElementsByClassName("header");

//select first element

const ul = document.getElementsByTagName("ul")[0];

//narroving down the search 


const lis = ul.getElementsByClassName("special");

// querySelector

const hi = document.querySelector('h1')

const special  =document.querySelector("li.special")

// css selector syntax 

const peas = document.querySelector('section li.special')

const password = document.querySelector('input[type="password"]');

// querySelectorAll

//returns collection of all
//and you can select one with array methods like Array[index] we getting result as NodeList vs. HTML collection 

// inner text and text content

const h1 = document.querySelector('h1');

hi.innerText = "Hello Bear" // changed text on the page

// innnerHTML
const inputsAll = document.querySelectorAll('input');
inputsAll[0].value = "HelloBear"

// getAttribute() setAttribute()

inputsAll[0].setAttribute("type", "radio");

// finding parents/siblings and children with DOM

// style 
const p = document.querySelector("p");

p.style.background = 'black';
p.style.color = "white"
// getComputedStyle this is shows actual styles 

const styles = getComputedStyle(p);

//styles.colors will show curent color of the tag on the page

//manipulating Classes
