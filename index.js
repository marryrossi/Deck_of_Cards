
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

// Elements reference
const $newDeckBtn = $('#new-deck-btn');
const $dealCardsBtn = $('#deal-cards-btn');

// Event listener
$newDeckBtn.on('click', newDeck);
$dealCardsBtn.on('click', dealCards);