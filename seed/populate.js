const fetch = require('node-fetch')

fetch('https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=25') //https://pokeapi.co/api/v2/pokemon?limit=25
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    const pokeArray = myJson.results
    pokeArray.forEach(pokemon => {
        postData(`http://localhost:5775/products/pokemon`, pokemon)
        .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        .catch(error => console.error(error));
    })
  })

  function postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.text()); // parses response to JSON
    }