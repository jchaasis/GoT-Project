//establish global variables
  function convertData(data) {
    return data.json();
  }


//1. fetch the data to use

fetch ("https://api.got.show/api/characters/")

  .then (convertData)
  // ( function(data){
  //   return data.json();
  // })

  .then( function(data){
    let characters= [];
    for (let i = 0; i<data.length; i++){
        for (let b = 0; b<data[i].books.length; b++){
          if (data[i].books[b] === "The World of Ice and Fire" && characters.length <= 20){
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
    console.log(characters);


  });

//fetch data for the houses
//
// fetch ("https://api.got.show/api/houses/")
//
//     .then(convertdata)
//     .then( function(){
//       for (let h = 0; h < data )
//
//     });
