function greet(name: string): string {
  return (`Hello, ${name}!`);
}

const greetArrow = (name: string): string => `Hello, ${name}!`;

const message = greet("Goku");
const message2 = greetArrow("Vegeta");

console.log("🚀 ~ :", { message })
console.log("🚀 ~ :", { message2 })


interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: 'ABC123',
    username: 'JohnDoe'
  }
}

const getUserArrow = (): User => ({
  uid: 'ABC123',
  username: 'JohnDoe'
})

const user = getUser();
const user2 = getUserArrow();

console.log(user);
console.log(user2);


const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach(console.log);