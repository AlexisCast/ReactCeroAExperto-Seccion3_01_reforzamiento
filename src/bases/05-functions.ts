function greet(name: string): string {
  return (`Hello, ${name}!`);
}

const greetArrow = (name: string): string => {
  return (`Hello, ${name}!`);
}

const message = greet("Goku");
const message2 = greetArrow("Vegeta");

console.log("🚀 ~ :", { message })
console.log("🚀 ~ :", { message2 })

function getUser() {
  return {
    uid: 'ABC123',
    username: 'JohnDoe'
  }
}

const getUserArrow = () => ({
  uid: 'ABC123',
  username: 'JohnDoe'
})

const user = getUser();
const user2 = getUserArrow();

console.log(user);
console.log(user2);
