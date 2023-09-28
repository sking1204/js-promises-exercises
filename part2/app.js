/* 1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/)
 to request a single card from a newly shuffled deck. Once you have the card,
 ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”). */

/* From api documentation:
https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2 copy
The count variable defines how many cards to draw from the deck. Be sure to replace deck_id with a valid deck_id. We use the deck_id as an identifier so we know who is playing with what deck. After two weeks, if no actions have been made on the deck then we throw it away.

TIP: replace <<deck_id>> with "new" to create a shuffled deck and draw cards from that deck in the same request. */

// let baseURL = 'https://deckofcardsapi.com/api/deck';

// axios.get(`${baseURL}/new/draw/?count=1`)
//   .then(response =>{
//     let suit = response.data.cards[0].suit;
//     let value = response.data.cards[0].value;
//     // console.log(response)
//     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//   })
//   .catch(error => {
//     console.log(error.code)
//   })









/*2. Make a request to the deck of cards API to request a single card from a newly shuffled deck.
 Once you have the card, make a request to the same API 
 to get one more card from the **same** deck.     
Once you have both cards, ***console.log*** the values and suits of both cards. */

// let baseURL = 'https://deckofcardsapi.com/api/deck';

// axios.get(`${baseURL}/new/draw/?count=1`)
//   .then(response1 =>{
//     let suit1 = response1.data.cards[0].suit;
//     let value1 = response1.data.cards[0].value;
//     // console.log(response1)
//     console.log(`${value1.toLowerCase()} of ${suit1.toLowerCase()}`);
//     console.log(response1)

//     return  axios.get(`${baseURL}/new/draw/?count=1`)
//   })
//     .then(response2 =>{     
//     let suit2 = response2.data.cards[0].suit;
//     let value2 = response2.data.cards[0].value;
//     // console.log(response2)
//     console.log(`${value2.toLowerCase()} of ${suit2.toLowerCase()}`);
//   })
//     .catch(error => {
//     console.log(error.code)
//   })






    
/*3. Build an HTML page that lets you draw cards from a deck. 
When the page loads, go to the Deck of Cards API to create a new deck,
and show a button on the page that will let you draw a card. Every time
you click the button, display a new card, until there are no cards left in the deck. */

// let deckId = null;
// const btn = document.querySelector('button');
// const deckSpace = document.getElementById('deck-space');
// let baseURL = 'https://deckofcardsapi.com/api/deck';
// axios.get(`${baseURL}/new/shuffle`)
// .then(res =>{
//     deckId =(res.data.deck_id)
//     console.log(deckId)
// })

// btn.addEventListener('click', function(){
//     axios.get(`${baseURL}/${deckId}/draw`)
//       .then(res => {
//         let cardImg = res.data.cards[0].image;
//         let cardContainer=document.createElement('div')
//         cardContainer.classList.add('card-container')
//         let imgEl = document.createElement('img');
//         imgEl.src = cardImg;
//         cardContainer.appendChild(imgEl);        
//         deckSpace.appendChild(cardContainer);

//       })

// })

let deckId = null;
const btn = document.querySelector('button');
const deckSpace = document.getElementById('deck-space');
let baseURL = 'https://deckofcardsapi.com/api/deck';
let totalCards =0;
let drawnCards =0;

axios.get(`${baseURL}/new/shuffle`)
.then(res => {
    deckId = res.data.deck_id;
    totalCards=res.data.remaining;
    console.log(deckId);
    
});

btn.addEventListener('click', function(){
    axios.get(`${baseURL}/${deckId}/draw`)
      .then(res => {
        console.log(res)
        let cardImg = res.data.cards[0].image;
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container'); 
        let imgEl = document.createElement('img');
        imgEl.src = cardImg;
        cardContainer.appendChild(imgEl);
        deckSpace.appendChild(cardContainer);
       

        drawnCards++;

        if (drawnCards === totalCards){
            btn.style.display = 'none';
        }
      });
    });



// $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
//     deckId = data.deck_id;
//     $btn.show();
//   });


