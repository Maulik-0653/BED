let p = new Promise((resolve, reject) => {
    let age = 18;
    if (age >= 18)  return resolve("You are eligible to vote");
       
    reject("You are not eligible to vote");
})
p
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});