let word;
const wordnikAPI =
  'https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';
const giphyAPI = `https://api.giphy.com/v1/gifs/search?rating=PG&api_key=6MimQV0XDcwPdtU8o87i6aAncBmF8m69&q=`;

// const giphyAPI =
//   'https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=';

function setup() {
  noCanvas();
  // fetch takes a URL as an parameter
  // fetch function returns a promise
  fetch(wordnikAPI)
    //  The promise is handled, when it is fulfilled data is logged,
    //  When there's an error, error is logged
    .then((response) => response.json())
    .then((json) => {
      createP(json.word);
      // Must say return
      console.log(json);
      word = json.word;
      console.log(word);

      return fetch(giphyAPI + word);
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      createImg(json.data[0].images['fixed_height_small'].url);
    })
    // This catch will catch any error from the promises above
    .catch((err) => console.log(err));
}
