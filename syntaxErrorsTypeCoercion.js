//L1 - ES6 Syntax Errors and Type Coercion

//You must correct a script that is intended to handle calculations for a small e-commerce checkout system. The script includes functions using ES6 syntax but suffers from issues related to type coercion and syntax errors.

const checkout = {

  items: [],
  
  total: 0,
  
  addItem(item) {
  
  if (typeof (item.price) !== 'number' || isNaN(item.price)) {
  
  return "Invalid price.";
  
  
  
  }
  
  this.items.push(item);
  
  this.total += item.price;
  
  },
  
  getTotal() {
  
  return `Total: $${parseFloat(this.total).toFixed(2)}`; } }
  
  checkout.addItem({ name: "Coffee Maker", price: 99.95 });
  console.log(checkout.getTotal());
  