const person = {
  name: 'Tony',
  age: 30,
  key: 'Ironman',
}

const { name, age, key } = person;

console.log({ name, age, key })


interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ name, age, key, rank = 'no rank' }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank
  }
}

const context = useContext(person);
console.log("🚀 ~ :", { context })

const { rank: otherRank, keyName, user: { name: otherName, age: otherAge } } = useContext(person)
console.log("🚀 ~ :", { otherRank, keyName, otherName, otherAge })

