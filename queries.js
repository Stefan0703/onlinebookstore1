db.books.find()
db.books.find({ category: "Science Fiction" })
db.books.find({ category: "Science Fiction", price: { $lt: 20 } })
db.books.updateOne({ title: "Dune" }, { $set: { price: 18.99 } })
db.books.deleteOne({ title: "Old Book" })
db.books.aggregate([
  { $group: { _id: "$category", totalSales: { $sum: "$sales" } } }
])
db.books.aggregate([
  { $group: { _id: "$category", avgPrice: { $avg: "$price" } } }
])
db.books.aggregate([
  { $match: { price: { $gt: 15 } } },
  { $sort: { price: -1 } }
])

db.authors.find()
db.authors.find({ country: "USA" })
db.authors.find({ country: "USA", booksWritten: { $gt: 3 } })
db.authors.updateOne({ name: "John Doe" }, { $set: { address: "New Address 123" } })
db.authors.deleteOne({ name: "Jane Smith" })
db.authors.aggregate([
  { $group: { _id: "$country", count: { $sum: 1 } } }
])
db.authors.aggregate([
  { $group: { _id: "$country", avgBooks: { $avg: "$booksWritten" } } }
])
db.authors.aggregate([
  { $match: { booksWritten: { $gt: 5 } } },
  { $sort: { name: 1 } }
])

db.orders.find()
db.orders.find({ customer: "Ivan" })
db.orders.find({ customer: "Ivan", status: "completed" })
db.orders.updateOne({ orderId: 12345 }, { $set: { status: "shipped" } })
db.orders.deleteOne({ orderId: 54321 })
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
])
db.orders.aggregate([
  { $group: { _id: "$customer", totalAmount: { $sum: "$totalPrice" } } }
])
db.orders.aggregate([
  { $match: { totalPrice: { $gt: 100 } } },
  { $sort: { orderDate: -1 } }
])
