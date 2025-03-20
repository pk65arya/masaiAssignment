

async function fetchProducts() {
  try {
      
      const response = await fetch('https://fakestoreapi.com/products');
      
 
      if (!response.ok) {
          throw new Error('Failed to fetch products');
      }
      
      
      const products = await response.json();

      
      displayProducts(products);

      
      const totalPrice = products.reduce((sum, product) => sum + product.price, 0);


      console.log(`Total Price of all products: $${totalPrice.toFixed(2)}`);
  } catch (error) {
    
      console.error('Error fetching products:', error);
      console.log('Failed to fetch products. Please try again later');
  }
}

function displayProducts(products) {
  
  products.forEach(product => {
      console.log(`Title: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log('--------------------------');
  });
}


fetchProducts();
