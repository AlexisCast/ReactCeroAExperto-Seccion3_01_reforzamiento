const API_KEY = 'g4lOp61RysrAxuxZuzIT0lSWsVCsaHX2';

const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`)

myRequest.then((response) => {
  // console.log({ response })

  // response.json().then((data) =>
  //   console.log(data))
  return response.json();

}).then((data) => {
  const imageUrl = data.data.images.original.url;
  console.log("🚀 ~ imageUrl:", imageUrl)

  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  document.body.append(imgElement);

}).catch((err) => {
  console.error({ err })
})