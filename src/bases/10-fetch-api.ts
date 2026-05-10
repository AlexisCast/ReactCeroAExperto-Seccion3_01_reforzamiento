import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = 'g4lOp61RysrAxuxZuzIT0lSWsVCsaHX2';

const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`)

const createImageInsideDome = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
}

myRequest.then((response) => {
  // console.log({ response })

  // response.json().then((data) =>
  //   console.log(data))
  return response.json();

}).then(({ data }: GiphyRandomResponse) => {
  const imageUrl = data.images.original.url;

  console.log("🚀 ~ imageUrl:", imageUrl)

  createImageInsideDome(imageUrl);

}).catch((err) => {
  console.error({ err })
})