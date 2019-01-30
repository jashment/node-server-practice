const fetch = require('node-fetch')

fetch('https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?limit=25')
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    const pokeArray = myJson.results

    pokeArray.foreach(pokemon => {
        postData(`http://localhost:5775/products/pokemon`, {answer: 42})
        .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        .catch(error => console.error(error));
    })
  })

  function postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "no-cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "omit", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
    }