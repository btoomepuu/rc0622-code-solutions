/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = (new Account(this.nextAccountNumber, holder));
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else { return null; }
};

Bank.prototype.getAccount = function (number) {
  var found = this.accounts.find(account => account.number === number);
  if (found) { return found; }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  this.accounts.forEach(account => {
    totalAssets += account.getBalance();
  });
  return totalAssets;
};
