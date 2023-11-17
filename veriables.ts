
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


