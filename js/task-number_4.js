class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    const res = (str += this._value);
    this._value = res;
  }
  pad(str) {
    this.str = str;
    this._value = str + this._value + str;
  }
}
const builder = new StringBuilder(".");
console.log(builder.value);

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);
