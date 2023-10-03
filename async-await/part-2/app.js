/* 1. Make a request to the [Deck of Cards API](http://deckofcardsapi.com/)
 to request a single card from a newly shuffled deck. Once you have the card,
 ***console.log*** the value and the suit (e.g. “5 of spades”, “queen of diamonds”). */


//API tip:
//TIP: replace <<deck_id>> with "new" to create a shuffled deck
// and draw cards from that deck in the same request.

async function part1() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
    let response = await axios.get(`${baseURL}/new/draw/`);     
    let suit = response.data.cards[0].suit;
    let value = response.data.cards[0].value;
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  }



//SB solution     

// async function part1() {
//     let baseURL = 'https://deckofcardsapi.com/api/deck';
//     let data = await $.getJSON(`${baseURL}/new/draw/`);
//     let { suit, value } = data.cards[0];
//     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//   }  



/*2. Make a request to the deck of cards API to request a single card from a newly shuffled deck.
 Once you have the card, make a request to the same API 
 to get one more card from the **same** deck.     
Once you have both cards, ***console.log*** the values and suits of both cards. */


async function getMultipleCards(){
    let baseURL = 'https://deckofcardsapi.com/api/deck';
    let firstCardRes = await axios.get(`${baseURL}/new/draw/`);
    let deckId =firstCardRes.data.deck_id
    let suit1 = firstCardRes.data.cards[0].suit
    let value1 = firstCardRes.data.cards[0].value
    console.log(`${value1.toLowerCase()} of ${suit1.toLowerCase()}`);
    let secondCardRes = await axios.get(`${baseURL}/${deckId}/draw/`);
    let suit2 = secondCardRes.data.cards[0].suit
    let value2 = secondCardRes.data.cards[0].value
    console.log(`${value2.toLowerCase()} of ${suit2.toLowerCase()}`); 

}



//SB solution:
async function part2() {
    let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
    let deckId = firstCardData.deck_id;
    let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
    [firstCardData, secondCardData].forEach(card => {
      let { suit, value } = card.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
  }






    
/*3. Build an HTML page that lets you draw cards from a deck. 
When the page loads, go to the Deck of Cards API to create a new deck,
and show a button on the page that will let you draw a card. Every time
you click the button, display a new card, until there are no cards left in the deck. */


async function drawCards(){
    let deckId = null;
    const btn = document.querySelector('button');
    const deckSpace = document.getElementById('deck-space');
    let baseURL = 'https://deckofcardsapi.com/api/deck';
    let totalCards =0;
    let drawnCards =0;
    
    let res = await axios.get(`${baseURL}/new/shuffle`)     
    deckId = res.data.deck_id;
    totalCards=res.data.remaining;
    console.log(deckId);

    btn.addEventListener('click', async function(){
        let drawCard = await axios.get(`${baseURL}/${deckId}/draw`)           
        let cardImg = drawCard.data.cards[0].image;
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
    })
    }
    drawCards();

    //SB Solution:

    // $(function() {
    //     let baseURL = 'https://deckofcardsapi.com/api/deck';     

    //   async function setup() {
    //     let $btn = $('button');
    //     let $cardArea = $('#card-area');
    
    //     let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    //     $btn.show().on('click', async function() {
    //       let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
    //       let cardSrc = cardData.cards[0].image;
    //       let angle = Math.random() * 90 - 45;
    //       let randomX = Math.random() * 40 - 20;
    //       let randomY = Math.random() * 40 - 20;
    //       $cardArea.append(
    //         $('<img>', {
    //           src: cardSrc,
    //           css: {
    //             transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
    //           }
    //         })
    //       );
    //       if (cardData.remaining === 0) $btn.remove();
    //     });
    //   }
    //   setup();
    // });





        
   





