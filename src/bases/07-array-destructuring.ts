const charactersNames = ['Goku', 'Vegeta', 'Trunks', 'Gohan']

const [p1, p2, p3, p4] = charactersNames;

console.log("🚀 ~ :", { p1, p2, p3, p4 })

const [, , trunks] = charactersNames;
console.log("🚀 ~ trunks:", trunks)

const returnArray = () => {
  return ['ABC', 123] as const;
}

const [letters, numbers] = returnArray();
console.log("🚀 ~ letters:", letters + "abc")
console.log("🚀 ~ numbers:", numbers + 123)

console.log("🚀 ~ :", { letters, numbers })



const useState = (value: string) => {
  return [value, (newValue: string) => {
    console.log(newValue);
  },] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');

