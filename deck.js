
const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
        const {suits,
          values,
          deck
        } = this;
            for(let value of values.split(',')) {
                for(let suit of suits) {
                deck.push({
                    value,
                    suit
            })
        }
    }
    },
    drawCard() {
        const card =  this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards =[];
        for(let i = 0; i < numCards.length; i++){
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle(){
        const {
            deck
        } = this;
        for(let i = deck.length - 1; i >0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

//fishe yreits shuffle algorithm 

//DOM

// document.getElementById


