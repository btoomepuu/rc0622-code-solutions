/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else { return false; }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else { return false; }
};

Account.prototype.getBalance = function () {
  var funds = 0;
  this.transactions.forEach(key => {
    if (key.type === 'withdrawal') {
      funds -= key.amount;
    } else (funds += key.amount);
  });
  return funds;
};
