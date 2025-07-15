let account_balance = 1000; // initial balance

function deductAmount(amount) {
  return new Promise((resolve, reject) => {
    if (amount > account_balance) {
      reject(new Error("Your account balance is low"));
    } else {
      account_balance -= amount;
      resolve("Your product is purchased");
    }
  });
}
buyProduct("Iphone 16", function (err, amount) {
  if (err) return console.log(err);
  console.log(amount);
  deductAmount(amount)
    .then((message) => {
      console.log(message);
      console.log(account_balance);
    })
    .catch((err) => {
      console.log(err.message);
    });
});0