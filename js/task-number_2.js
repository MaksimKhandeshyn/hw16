class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `${this.name} is ${this.age} years old, has ${this.followers} followers`
    );
  }
}
const firstUser = new User({
  name: "Vika",
  age: 13,
  followers: 1000,
});
firstUser.getInfo();
const seconUser = new User({
  name: "Nickolas",
  age: 34,
  followers: 10000000,
});
seconUser.getInfo();
