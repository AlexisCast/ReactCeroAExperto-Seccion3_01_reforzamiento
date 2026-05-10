import { heroes, Owner, type Hero } from "./data/heroes.data"

const getHeroeById = (id: number): Hero | undefined => {
  const hero = heroes.find(heroe => {
    return heroe.id === id
  });

  // if (!hero) {
  //   throw new Error(`Hero with id ${id} not found`)
  // }

  return hero
}

console.log("🚀 ~ getHeroeById:", getHeroeById(1))
console.log("🚀 ~ getHeroeById:", getHeroeById(10))

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  const heroesByOwner = heroes.filter(heroe => {
    return heroe.owner === owner
  })

  return heroesByOwner;
}