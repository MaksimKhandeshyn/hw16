function Account(login, email) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login},  E-mail: ${this.email}`);
};

const mango = new Account("maksim", "maksim@gmail.com");
mango.getInfo();
