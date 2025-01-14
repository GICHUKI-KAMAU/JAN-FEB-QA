//Create an array of objects and sort them
const fruits = [
    { name: 'Apple', price: 35 },
    { name: 'xanana', price: 10 },
    { name: 'Dragon Fruit', price: 250 },
    { name: 'Melon', price: 100 },
  ];

  fruits.sort((a, b) => a.price - b.price);
//   items.sort((a, b) => a.name.localeCompare(b.name));

  console.log('Sorted by price:', fruits);


//Give me the sum of the prices (try chaining methods)
//[{price: 10.99}, {price: 5.99}, {price: 29.99}]


const items = [{price: 10.99}, {price: 5.99}, {price: 29.99}];

const total = items.map(item => item.price).reduce((sum, price) => sum + price, 0);

console.log(total); 