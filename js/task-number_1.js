function Account(login, email) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`${this.login}: ${this.email}`);
};

const mango = new Account("maksim", "maksim@gmail.com");
mango.getInfo();
