

//1.Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number.


// async function getFavoriteNumberInfo(){
//     let favNumber = 11;
//     let baseURL = 'http://numberapi.com' 
//     let res = await axios.get(`${baseURL}/${favNumber}?json`)
//     console.log(res)
// }

// getFavoriteNumberInfo();



//2.Figure out how to get data on multiple numbers in a single request.
// Make that request and when you get the data back, put all of the number facts on the page.

// async function getMultipleNumbers(){
//     let baseURL = 'http://numberapi.com'
//     let res = await axios.get(`${baseURL}/1..3?json`)     
//     console.log(res.data);       
  
// }

// getMultipleNumbers(); 




//4. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page.
// It’s okay if some of the facts are repeats.



// async function getFavoriteNumberFourFacts() {
//   const favNumber = 44;
//   const fourNumFacts = [];
//   const baseURL = 'http://numberapi.com';

//   for (let i = 1; i < 5; i++) {
//     try {
//       const res = await axios.get(`${baseURL}/${favNumber}?json`);
//       fourNumFacts.push(res.data); // Push the data property of the Axios response
      
//     } catch (error) {
//       console.error(`Error fetching fact ${i}: ${error.message}`);
//     }
//   }
//   console.log(fourNumFacts)
//   // return fourNumFacts;
// }



// //SB solution:

// async function part3() {
//   let facts = await Promise.all(
//     Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
//   );
//   facts.forEach(data => {
//     $('body').append(`<p>${data.text}</p>`);
//   });
// }
// part3();


//Another solution:

async function fetchNumFacts() {
  let favNumber = 44;
  let fourNumFacts = [];
  let baseURL = 'http://numberapi.com';

  for (let i = 1; i < 5; i++) {
    fourNumFacts.push(axios.get(`${baseURL}/${favNumber}?json`));
  }

  try {
    const fourFactsArr = await Promise.all(fourNumFacts);

    fourFactsArr.forEach((res) => {
      console.log(res.data.text);
      $("body").append(`<p>${res.data.text}</p>`);
    });
  } catch (err) {
    console.log(err);
  }
}

fetchNumFacts();

//Another solution:

// async function getFavoriteNumberFourFacts() {
//   const favNumber = 44;
//   const baseURL = 'http://numberapi.com';

//   const fetchFact = async (i) => {
//     try {
//       const res = await axios.get(`${baseURL}/${favNumber}?json`);
//       return res.data; // Return the data property of the Axios response
//     } catch (error) {
//       console.error(`Error fetching fact ${i}: ${error.message}`);
//       return null; // Return null for the failed requests
//     }
//   };

//   const fetchPromises = [];

//   for (let i = 1; i < 5; i++) {
//     fetchPromises.push(fetchFact(i));
//   }

//   const fourNumFacts = await Promise.all(fetchPromises);

//   console.log(fourNumFacts.filter((fact) => fact !== null)); // Filter out null values for failed requests
//   // return fourNumFacts;
// }

// getFavoriteNumberFourFacts();


































