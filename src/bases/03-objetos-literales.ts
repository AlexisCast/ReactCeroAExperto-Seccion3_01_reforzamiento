interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isDeveloper: boolean;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironMan: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 30,
  isDeveloper: true,
  address: {
    postalCode: "12345",
    city: "New York",
  }
}

// const spiderMan = { ...ironMan };
const spiderMan = structuredClone(ironMan);//deep clone

console.log("🚀 :", { ironMan, spiderMan })

spiderMan.firstName = "Peter";
spiderMan.lastName = "Parker";
spiderMan.age = 18;
spiderMan.address.city = "Queens";

console.log("🚀 :", { ironMan, spiderMan })

