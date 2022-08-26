let globalDeck; // Defining variable


// Making an ajax request to api to get a new deck. Referred to Mozilla async functions 
async function newDeck() {
    // console.log("newDeck")
    const deck = await $.ajax('https://www.deckofcardsapi.com/api/deck/new/');
    $cardSelection.innerHTML = ""; // this will clears the cards
    globalDeck = deck;
    console.log(deck); 

    $remainingCardsDiv[0].innerText = "Remaining Cards: " + deck.remaining; // displays 52 cards remaining 
    return deck;
};

// Making ajax request to draw 2 cards
async function dealCards() {
    // console.log("dealCard")
    const data = await $.ajax(`https://www.deckofcardsapi.com/api/deck/${globalDeck.deck_id}/draw/?count=2`)
    console.log(data)
    $cardSelection.innerHTML = ""; // clear cards
    // Using a for-loop for each card
    for (let i=0; i < data.cards.length; i++) {
        let $cardImg = document.createElement('img'); // Creating a new html element. Referred to w3 schools jQuery add elements
        $cardImg.src = data.cards[i].image; // Adding data from the card into the element
        
        $cardSelection.append($cardImg); // Inserting the element into the DOM
    }

    $remainingCardsDiv[0].innerText = "Remaining Cards: " + data.remaining; //displays cards remaining after draw
    return data;
};

// Elements reference
const $newDeckBtn = $('#new-deck-btn');
const $dealCardsBtn = $('#deal-cards-btn');
const $remainingCardsDiv = $('#remaining-cards');
const $cardSelection = document.querySelector('#cards-container');

// Event listener
$newDeckBtn.on('click', newDeck);
$dealCardsBtn.on('click', dealCards);
