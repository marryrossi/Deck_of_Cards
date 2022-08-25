
// Get brand new deck

// Draw Cards

// Reshuffle Cards

let globalDeck; // Defining global variable with null value


// Make an ajax request to api to get a new deck
async function newDeck() {
    console.log("newDeck")
    const deck = await $.ajax('https://www.deckofcardsapi.com/api/deck/new/');

    globalDeck = deck;
    return deck;
};

async function dealCards() {
    console.log("dealCard")
    const cards = await $.ajax(`https://www.deckofcardsapi.com/api/deck/${globalDeck.deck_id}/draw/?count=2`)

    console.log(cards);
    return cards;
};

// async function shuffleCards(deckId) {
//     console.log("deckId:", deckId)
//     const cardsShuffled = await $.ajax(`https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/`)

//     return cardsShuffled;
// };

// Elements reference
const $newDeckBtn = $('#new-deck-btn');
const $dealCardsBtn = $('#deal-cards-btn');

// Event listener
$newDeckBtn.on('click', newDeck);
$dealCardsBtn.on('click', dealCards);



