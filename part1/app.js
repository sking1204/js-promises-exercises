

//1.Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number.
// let favNumber = 11;
// let baseURL = 'http://numberapi.com' 

// axios.get(`${baseURL}/${favNumber}?json`)
//   .then(response =>{
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error.code)
//   })



//SB solution:

// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//     console.log(data);
//   });

//2.Figure out how to get data on multiple numbers in a single request.
// Make that request and when you get the data back, put all of the number facts on the page.

// let baseURL = 'http://numberapi.com'
// axios.get(`${baseURL}/1..3?json`)
//   .then(response =>{
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error.code)
//   })



//A different solution:

// let favNumbers = [11,21,99]
// // let baseURL = 'http://numberapi.com' 
// favNumbers.forEach(number =>{
//     let url = `${baseURL}/${number}?json`;

//     axios.get(url)
//       .then(response =>{
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error.code)
//       })

// }) 


//SB solution:
//Ask mentor why this solution works:
// let favNumbers = [7, 11, 22];
// $.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
//   console.log(data);
// });



//4. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page.
// It’s okay if some of the facts are repeats.


let favNumber =44;
let fourNumFacts = [];
let baseURL = 'http://numberapi.com' 

for (let i = 1; i < 5; i++) {
  fourNumFacts.push(
    axios.get(`${baseURL}/${favNumber}?json`)
)
  }




Promise.all(fourNumFacts)
  .then(fourFactsArr => {  
    fourFactsArr.forEach(res =>{
        console.log(res.data.text);
        $("body").append(`<p>${res.data.text}</p>`)
    }) 

 })           
  .catch(err => console.log(err));

























