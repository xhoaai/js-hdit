console.log("lab 03")

const pr1 = {
    name: "ao thun",
    price: 500,
    inStock: true
}


const pr2 = {
    name: "ao so mi",
    price: 600,
    inStock: true
}


const pr3 = {
    name: "ao chong nang",
    price: 900,
    inStock: false
}


const pr4 = {
    name: "quan kaki",
    price: 1000,
    inStock: true
}


const pr5 = {
    name: "ao pro",
    price: 100,
    inStock: false
}

const products = [pr1, pr2, pr3, pr4, pr5];
console.log("origin: ", products);

//1.	In ra tên của sản phẩm đầu tiên.
const firstProduct = products[0];
console.log("1. sản phẩm đầu tiên co ten la: ", firstProduct.name);

//2.	Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
const secondProduct = products[1];

const products2 = [pr1, {
    name: pr2.name,
    price: 150,
    inStock: pr2.inStock
}, pr3, pr4, pr5];
console.log("2. update price pr2 = 150: ", products2);


//3.	Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
products.push({
    name: "quan short nam",
    price: 700,
    inStock : true
})
console.log("3. Them mot san pham moi vao cuoi mang va in ra tat cả cac san pham", products)

//4.	Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
products.pop()
console.log("4. Xoa san pham cuoi cung ra khoi danh sach: ", products)

//5.	Dùng forEach( ) để in ra tất cả tên sản phẩm.
//names = products.name;
console.log("==================")
console.log("5. Dùng forEach( ) để in ra tất cả tên sản phẩm.")
products.forEach(function(item, index) {
    console.log("index: ", index, "product name: ", item.name);
});

console.log("-----------------")
products.forEach((item1, index) => {
    console.log("so thu tu: ", index, "product name: ", item1.name);

});

console.log(" Co the dung ham map() de in ra tat ca ten san pham")
products.map((item, index) => {
    console.log("index: ", index, " In product name: ", item.name)
})

//6.	Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
console.log("6.	Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.")

const priceProduct = products.map((item, index) => {
    return item.price;
})

console.log(" 6. price list of product: ", priceProduct);


//7.	Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).
const inStockProduct = products.filter((item, ixdex ) => item.inStock === true)
console.log("7. InStockProduct: ", inStockProduct);


//8.	Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.
console.log("-----------------")
for (const key in pr1){
    console.log(key,pr1[key])
}

