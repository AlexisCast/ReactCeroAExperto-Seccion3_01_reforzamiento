
const myPromise = new Promise<number>((resolve, reject) => {

  setTimeout(() => {
    resolve(100)
    // reject(false)
  }, 2000)

})

myPromise.then(
  (myMoney) => {
    console.log(`Tego mi dinero ${myMoney}.`)
  }
).catch((reason) => {
  console.warn({ reason })
}).finally(() => {
  console.log("continue...")
})
