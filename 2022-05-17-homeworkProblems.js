//Using promises with an API
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then( response => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request...");



//Chaining Promises
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise1.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( json => {
    console.log(json[0].name);
  });
});

//refactored to include
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise2
  .then( response => {
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
});

const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

//adding an error check
fetchPromise3
    .then( response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then( json => {
      console.log(json[0].name);
});



//Catching errors
const fetchPromise4 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise4
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  })
  .catch( error => {
    console.error(`Could not get products: ${error}`);
});


//Combining multiple promises
const fetchPromise5 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise6 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise7 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise5, fetchPromise6, fetchPromise7])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
});   


//Async and Await
async function fetchProductsA() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the JSON object or throw an error
      const json = await response.json();
      console.log(json[0].name);
    }
    catch(error) {
      console.error(`Could not get products: ${error}`);
    }
}
  
fetchProducts();


//now adding a try...catch block
async function fetchProductsB() {
    try {
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const json = await response.json();
      return json;
    }
    catch(error) {
      console.error(`Could not get products: ${error}`);
    }
}
  
const jsonPromise = fetchProducts();
jsonPromise.then((json) => console.log(json[0].name));



//Async Await YouTube - https://www.youtube.com/watch?v=vn3tm0quoqE
//L1    
console.log('Synchronous 1')

//L2
setTimeout(_ =>console.log('Timeout 2', 0));

//L3
Promise.resolve().then(_ => console.log('Promise'));

//L4
console.log('Synchronous 2')



promise
    .then(res => res.json())
    .then(user => {
        throw new Error ('uh oh');
        return user;
    })
    .then(user => console.log(user.title))
    .catch(err => console.error('err'));

console.log('Synchronous');


