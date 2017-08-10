//establish global variables
  function convertData(data) {
    return data.json();
  }


//1. fetch the data to use for the characters page.

fetch ("https://api.got.show/api/characters/")

  .then (convertData)
  // ( function(data){
  //   return data.json();
  // })

  .then( function(data){
    //list of the first 20 characters from the book "The World of Ice and Fire"
    let characters= [];
    for (let i = 0; i<data.length; i++){
        for (let b = 0; b<data[i].books.length; b++){
          if (data[i].books[b] === "The World of Ice and Fire" && characters.length < 20){
            let character = `
                <div>
                    <img src='${data[i].imageLink}'>
                    <h5>Name = ${data[i].name}</h5>
                </div>
                            `;
              characters.push(character);
          }
      }
    }
  // append the characters to the body once the html page is built
    console.log(characters);


  });

// fetch data for the houses page

fetch ("https://api.got.show/api/houses/")

    .then(convertData)
    .then( function(data){
      //list of the first 20 houses
      let houses = [];

      for (let h = 0; h < data.length; h++){
        if (houses.length < 20){
        let house = `
                  <div>
                      <img src="${data[h].imageLink}">
                      <h5>Name = ${data[h].name}</h5>
                  </div>
        `;
            houses.push(house);
        }
      }
      console.log(houses);
    });
