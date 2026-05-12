import type { GiphyRandomResponse } from "./data/giphy.response";


const createImageInsideDome = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
}


const API_KEY = 'g4lOp61RysrAxuxZuzIT0lSWsVCsaHX2';

export const getImageUrl = async () => {
  const response = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`)


  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url

}

getImageUrl().then((url) => createImageInsideDome(url))