// 1️⃣ Filter Even Numbers
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr1.filter((n) => n % 2 === 0));

// 2️⃣ Square Each Number
let arr2 = [2, 4, 6];
console.log(arr2.map((n) => n * n));

// 3️⃣ Extract Names
let users1 = [
  { name: "Irfan", age: 22 },
  { name: "Allen", age: 15 },
];
console.log(users1.map((u) => u.name));

// 4️⃣ Filter Adults
let users2 = [
  { name: "Allen", age: 22 },
  { name: "Black", age: 15 },
  { name: "James", age: 30 },
];
console.log(users2.filter((u) => u.age > 18));

// 5️⃣ Find Product by ID
let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Tablet" },
];
console.log(products.find((p) => p.id === 2));

// 6️⃣ Calculate Total Marks
let marks = [10, 20, 30, 40];
console.log(marks.reduce((sum, n) => sum + n, 0));

// 7️⃣ Check Admin Exists
let users3 = [
  { name: "Irfan", role: "user" },
  { name: "Ali", role: "admin" },
];
console.log(users3.some((u) => u.role === "admin"));

// 8️⃣ Check All Adults
let users4 = [
  { name: "A", age: 25 },
  { name: "B", age: 30 },
  { name: "C", age: 18 },
];
console.log(users4.every((u) => u.age >= 18));

// 9️⃣ Count Frequency
let fruits = ["apple", "banana", "apple", "orange", "banana"];
let count = fruits.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});
console.log(count);

// 🔟 High Salary Employees
let emp = [
  { name: "Irfan", salary: 60000 },
  { name: "Ali", salary: 40000 },
  { name: "Sara", salary: 80000 },
];
console.log(emp.filter((e) => e.salary > 50000).map((e) => e.name));
