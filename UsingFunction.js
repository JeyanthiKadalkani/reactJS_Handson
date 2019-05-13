var Invoice = require("./Invoice");
function calTotal(...invoices) {
  let total = 0;
  invoices.forEach(element => {
    total += element.amt;
  });
  return total;
}

var ram = new Invoice(101, "jey", 10);
var sy = new Invoice(102, "j", 20);

console.log(calTotal(ram, sy));
var sys = new Invoice(103, "j1", 200);
console.log(calTotal(ram, sy, sys));

var t = { d: 40 };
var s = { a: 10 };
console.log(Object.assign(t, s));
var s1 = { b: 30, a: 20 };
console.log(Object.assign(t, s, s1));
