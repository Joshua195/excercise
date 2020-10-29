const faker = require('faker');

const generateProducts = (length, minCategory, maxCategory, minPrice, maxPrice) => {
  let a = new Array(length);
  for (let i = 0; i < a.length; i++) {
    const randomCategory = Math.floor(Math.random() * (+maxCategory - +minCategory)) + +minCategory;
    const randomStock = Math.floor((Math.random() * 1000) % 2);
    const randomPrice = (Math.random() * (+maxPrice - +minPrice)) + +minPrice;
    a[i] = {
      id: 1000 + i + 1,
      category: `Category ${randomCategory}`,
      name: faker.lorem.words(),
      image: `https://picsum.photos/400?image=${Math.floor(Math.random() * 1000)}`,
      stock: !!randomStock,
      price: Number(randomPrice.toFixed(2)),
      description: faker.lorem.sentence()
    }
  }
  return a
}

console.log(JSON.stringify(generateProducts(40, 1, 5, 1000, 4000)));
