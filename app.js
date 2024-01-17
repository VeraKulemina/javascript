const examScore = [
    { 
        firstName: 'John',
        score : 89
    },
    { 
        firstName: 'Vera',
        score : 99
    },
    { 
        firstName: 'Joel',
        score : 70
    }      
]

for (let i=0; i<examScore.length; i++) {
    console.log(examScore[i].firstName + ' '+" scored"+ " " + examScore[i].score);
}

const word ="stressed";

for (let i = word.length -1; i > 0; i--) {
    console.log(word[i]);
}
