function Product(name, brand, price, description) {
  // Complete the constructor function
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = description;
  this.sold = false
}

// Create these two methods in Product prototype :-

// changePrice

Product.prototype.changePrice = function (price) {
  return (this.price = price);
};
// toggleStatus

Product.prototype.toggleStatus = function () {
  if (this.sold == true) {
    return (this.sold = false);
  } else return (this.sold = true);
};

// Do not change this
export default Product;
