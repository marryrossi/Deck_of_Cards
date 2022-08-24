 console.log('connected');

// Make an ajax request to api to get a new deck
async function newDeck() {
    const deck = await $.ajax('https://www.deckofcardsapi.com/api/deck/new/');

    $deckSection = $('#cards-container');

    for (let i=0; i < deck.remaining; i++) {
        $card = document.createElement('div');
        $card.innerText = "CARD";
        $card.className = "card";

        $deckSection.append($card)
    }
    console.log(deck)
    return deck;
};