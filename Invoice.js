class Invoice {
  constructor(num, cName, amt) {
    this.invoiceNumber = num;
    this.customerNAme = cName;
    this.amt = amt;
  }
  toString() {
    //template literal `` - Backtick symbol
    return `${this.invoiceNumber},${this.customerNAme}
    ${this.amt},
    discount = ${this.amt * 0.1}`;
  }
}

var s = new Invoice(12, "JEy", 12);
//console.log(s.toString());

module.exports = Invoice;
