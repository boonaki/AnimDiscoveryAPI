//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const url = `https://api.aniapi.com/v1/random/anime/1/false`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data[0])
        document.querySelector('img').src = data.data[0].cover_image
        if(data.data[0].titles.en !== null)
          document.querySelector('h1').innerText = data.data[0].titles.en
        else{
          document.querySelector('h1').innerText = data.data[0].titles.rj
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

