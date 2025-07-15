let users=[

]
function isEligible(id){
    return new Promise((resolve, reject) => {
        let user = users.find(user => user.id === id);
        if (user) {
            if (user.age >= 18) {
                resolve("User is eligible");
            } else {
                reject("User is not eligible");
            }
        } else {
            reject("User not found");
        }
    });
}
function buyProduct(product_name, cb) {
    let isproduct = null;
    //implement for loop to find product in an array
    //find product object from product array who's name is equal to product_name
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == product_name) {
            isproduct = products[i];
        }
    }
    if (!isproduct) {
        cb("product is not available", null);
    } else {
        cb(null, isproduct.amount);
    }
}
