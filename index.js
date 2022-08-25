let globalDeck; // Defining global variable with null value



// Make an ajax request to api to get a new deck
async function newDeck() {
    // console.log("newDeck")
    const deck = await $.ajax('https://www.deckofcardsapi.com/api/deck/new/');
    $cardSelection.innerHTML = "";
    globalDeck = deck;
    console.log(deck); 

    $remainingCardsDiv[0].innerText = "Remaining Cards: " + deck.remaining;
    return deck;
};

async function dealCards() {
    // console.log("dealCard")
    const data = await $.ajax(`https://www.deckofcardsapi.com/api/deck/${globalDeck.deck_id}/draw/?count=2`)
    console.log(data)
    $cardSelection.innerHTML = "";
    // Using a for-loop for each card
    for (let i=0; i < data.cards.length; i++) {
        let $cardImg = document.createElement('img'); // Creating a new html element
        $cardImg.src = data.cards[i].image; // Adding data from the card into the element
        
        $cardSelection.append($cardImg); // Inserting the element into the DOM
    }

    $remainingCardsDiv[0].innerText = "Remaining Cards: " + data.remaining;
    return data;
};

async function shuffleCards(deckId) {
    // console.log("deckId:", deckId)
    const cardsShuffled = await $.ajax(`https://www.deckofcardsapi.com/api/deck/${globalDeck.deck_id}/shuffle/`)

    return cardsShuffled;
};

// Elements reference
const $newDeckBtn = $('#new-deck-btn');
const $dealCardsBtn = $('#deal-cards-btn');
const $remainingCardsDiv = $('#remaining-cards');
const $cardSelection = document.querySelector('#cards-container');

// Event listener
$newDeckBtn.on('click', newDeck);
$dealCardsBtn.on('click', dealCards);
