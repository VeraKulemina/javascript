
function square(num: number) {
    return num*num;
}

function addNums(x: number, y: number) : number | string {
    return x + y;
}

addNums(5, 5);

const colors = ["red", "green", "yellow"];
colors.map(color => {
    return color.toUpperCase();
})

// never 
function makeError (msg:string) :never{
    throw new Error(msg);
}

function twoFer(name: string = "you") :string {
    return `One for ${name}, one for me`;
}

function isLeapyear(year : number) : boolean {
    return(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
}
