db.books.find({ price: { $lt: 30 } });

db.customers.find({ name: /Ivan/i });

db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerInfo"
    }
  },
  {
    $unwind: "$customerInfo"
  },
  {
    $match: { "customerInfo.name": "Ivan Ivanov" }
  }
]);

db.books.updateOne(
  { title: "Clean Code" },
  { $set: { stock: 25 } }
);

db.books.deleteOne({ title: "The Pragmatic Programmer" });
