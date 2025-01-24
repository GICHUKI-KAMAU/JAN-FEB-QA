function calculateTotal(products) {
 
    let total = products.reduce((sum, product) => sum + product.price, 0);

    if (total > 100) {
        total *= 0.9;
    }

    total *= 1.08; 

    return total;
}


const products = [
    { name: 'Product 1', price: 50 },
    { name: 'Product 2', price: 60 },
    { name: 'Product 3', price: 30 }
];

console.log(calculateTotal(products)); 

module.exports = calculateTotal;