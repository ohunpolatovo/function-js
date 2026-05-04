const products = [
  {
    id: 1,
    name: "iPhone 13",
    price: 999,
    category: "Electronics",
    stock: 12,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
    description: "Apple smartphone",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 850,
    category: "Electronics",
    stock: 8,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    description: "Samsung flagship phone",
  },
  {
    id: 3,
    name: "MacBook Air M1",
    price: 1200,
    category: "Laptops",
    stock: 5,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    description: "Apple lightweight laptop",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 1300,
    category: "Laptops",
    stock: 6,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "Premium ultrabook",
  },
  {
    id: 5,
    name: "HP Pavilion",
    price: 900,
    category: "Laptops",
    stock: 7,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Affordable laptop",
  },
  {
    id: 6,
    name: "iPad Air",
    price: 700,
    category: "Electronics",
    stock: 9,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    description: "Apple tablet",
  },
  {
    id: 7,
    name: "Sony Headphones",
    price: 200,
    category: "Electronics",
    stock: 15,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
    description: "Noise cancelling headphones",
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 180,
    category: "Electronics",
    stock: 20,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    description: "Fitness tracking watch",
  },
  {
    id: 9,
    name: "T-Shirt",
    price: 25,
    category: "Clothing",
    stock: 40,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "Casual t-shirt",
  },
  {
    id: 10,
    name: "Jeans",
    price: 50,
    category: "Clothing",
    stock: 30,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    description: "Denim jeans",
  },
  {
    id: 11,
    name: "Jacket",
    price: 120,
    category: "Clothing",
    stock: 18,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    description: "Winter jacket",
  },
  {
    id: 12,
    name: "Hoodie",
    price: 60,
    category: "Clothing",
    stock: 25,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    description: "Warm hoodie",
  },
  {
    id: 13,
    name: "Keyboard",
    price: 45,
    category: "Accessories",
    stock: 35,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Mechanical keyboard",
  },
  {
    id: 14,
    name: "Mouse",
    price: 30,
    category: "Accessories",
    stock: 50,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    description: "Wireless mouse",
  },
  {
    id: 15,
    name: "Backpack",
    price: 70,
    category: "Accessories",
    stock: 22,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f",
    description: "Laptop backpack",
  },
  {
    id: 16,
    name: "Power Bank",
    price: 35,
    category: "Accessories",
    stock: 40,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    description: "Portable charger",
  },
  {
    id: 17,
    name: "Gaming Laptop",
    price: 1500,
    category: "Laptops",
    stock: 4,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    description: "High performance laptop",
  },
  {
    id: 18,
    name: "Office Laptop",
    price: 800,
    category: "Laptops",
    stock: 10,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
    description: "Work laptop",
  },
  {
    id: 19,
    name: "Bluetooth Speaker",
    price: 90,
    category: "Electronics",
    stock: 16,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    description: "Portable speaker",
  },
  {
    id: 20,
    name: "Camera",
    price: 600,
    category: "Electronics",
    stock: 5,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be96b65",
    description: "Digital camera",
  },
  {
    id: 21,
    name: "Cap",
    price: 20,
    category: "Clothing",
    stock: 45,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1526178613658-3f1622045557",
    description: "Stylish cap",
  },
  {
    id: 22,
    name: "Sunglasses",
    price: 80,
    category: "Accessories",
    stock: 28,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    description: "UV protection glasses",
  },
];
// Hamma masala shu array asosida ishlanadi
// 1-masala
// Function yasang unda yuqoridagi arrayni price 500 dan yuqorilarini bitta arrayga yegib
// qaytarsin.
// function priceArr(arr) {
//   let filteredProducts = [];
//   for (let i of arr) {
//     if (i.price >= 500) {
//       filteredProducts.push(i);
//     }
//   }

//   return filteredProducts;
// }
// console.log(priceArr(products));
// =====================================================================
// 2-masala
// Function yasang unda yuqoridagi arrayni rating 4dan yuqorilarini bitta arrayga yegib qaytarsin.
// function priceArr(arr) {
//   let filteredProducts = [];
//   for (let i of arr) {
//     if (i.rating > 4) {
//       filteredProducts.push(i);
//     }
//   }

//   return filteredProducts;
// }
// console.log(priceArr(products));
// ====================================================================
// 3-masala
// Function yasang unda yuqoridagi arrayda nechta mahsulot borligi aniqlansin va qaytarsin
// function calculateTotal(arr) {
//   return arr.length;
// }
// console.log(calculateTotal(products));
//================================================================
// 4-masala
// Function yasang unda yuqoridagi arrayni price 500 dan yuqorilariga 10% lik chegirma berilsin
// 500dan pastlariga 10% miqdorda narx qoshilsin va yangiangan array qayt sin qaytarsin.
// function priceArr(arr) {
//   let updatedProducts = [];

//   for (let i of arr) {
//     if (i.price > 500) {
//       i.price = i.price * 0.9;
//     } else {
//       i.price = i.price * 1.1;
//     }
//     updatedProducts.push(i);
//   }
//   return updatedProducts;
// }
// console.log(priceArr(products));
// =====================================================
// 5-masala
// Functuon yozing yuqoridagi arr ni clothes categoryga oidlarini olib tashlang va category Clothing
// bolganlarsiz array qaytaring
// function category(arr) {
//   let result = [];
//   for (let i of arr) {
//     if (i.category !== "Clothing") {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(category(products));
