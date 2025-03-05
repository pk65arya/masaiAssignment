//L2 - Inventory Management System: Tracking Low Stock and Reordering

//You are building an Inventory Management System for a store. You have an array of product objects, where each product contains the following properties: name, category, stock, and pricePerUnit. Your task is to perform a series of operations to track and manage low-stock items and reorder supplies efficiently. Follow the steps below:



const inventory=[

  { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
  
  { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
  
  { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
  
  { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
  
  { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
];

const filterProduct=inventory.filter((ele)=>{
     return ele.stock<100;
})

const reorderCosts = filterProduct.map(ele => {
  const reorderAmount = 100 - ele.stock;
  const totalCost = reorderAmount * ele.pricePerUnit;
  return { category: ele.category, totalCost };
});

const categoryCosts = reorderCosts.reduce((acc, curr) => {
  if (acc[curr.category]) {
      acc[curr.category] += curr.totalCost;
  } else {
      acc[curr.category] = curr.totalCost;
  }
  return acc;
}, {});

const sortedCategoryCosts = Object.entries(categoryCosts)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [category, cost]) => {
        acc[category] = cost;
        return acc;
    }, {});

console.log(sortedCategoryCosts);
