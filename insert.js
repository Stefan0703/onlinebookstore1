db.books.insertMany([
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genres: ["Fantasy", "Adventure"],
    price: 19.99,
    stock: 50
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    genres: ["Programming", "Software Engineering"],
    price: 39.99,
    stock: 30
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    year: 1999,
    genres: ["Programming", "Software Development"],
    price: 29.99,
    stock: 40
  }
]);

db.customers.insertMany([
  {
    name: "Ivan Ivanov",
    email: "ivan.ivanov@example.com",
    phone: "+359888123456",
    address: "Sofia, Bulgaria",
    registrationDate: new Date("2023-01-15")
  },
  {
    name: "Maria Petrova",
    email: "maria.petrova@example.com",
    phone: "+359888654321",
    address: "Plovdiv, Bulgaria",
    registrationDate: new Date("2023-02-20")
  }
]);

db.orders.insertMany([
  {
    customerId: ObjectId("PUT_CUSTOMER_ID_HERE"),
    orderDate: new Date("2023-03-10"),
    items: [
      { bookId: ObjectId("PUT_BOOK_ID_HERE"), quantity: 1 },
      { bookId: ObjectId("PUT_BOOK_ID_HERE"), quantity: 2 }
    ]
  }
]);
