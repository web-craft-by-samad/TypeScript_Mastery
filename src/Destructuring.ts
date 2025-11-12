/*
==> ⚙️Destructuring means unpacking values from arrays or objects into separate variables.
It’s a syntactic sugar that makes code cleaner, shorter, and more readable.

TypeScript supports destructuring with type safety — meaning, you can specify or infer types while unpacking.


*/

// ✅ Basic Array Destructuring

const my_ex = ['prianka', 'liyana', 'nafisa', 'niti', 'tasbih', 'anshi']
const [first, second, third, forth, fifth, sixth] = my_ex

console.log(first)
console.log(second)
console.log(third)
console.log(forth)

const [one, , , , , six] = my_ex
console.log(one, six)

// ✅ Object Destructuring

const prianka = {
    name: 'prianka_das',
    age: 23,
    depertment: "apparel",
    sweet_voice: true,
    cute_smile: false
}

const {name,age,cute_smile} = prianka;
console.log(name,age,cute_smile)

// ✅ With Type Annotation

type Person = {
  id: number;
  name2: string;
  age2?: number;
};

const person: Person = { id: 1, name2: "Ataus" };

const { id, name2, age2 = 18 }: Person = person;

console.log(id, name2, age2);

// ✅ Nested Destructuring

const user = {
  id: 1,
  name3: "Ataus",
  address: {
    city: "Dhaka",
    zip: 1207,
  },
};

const {
  name3,
  address: { city },
} = user;

console.log(name3, city); // Ataus Dhaka





