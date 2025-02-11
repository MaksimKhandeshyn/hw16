class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
  get value() {
    return this._value;
    }
    set append(str) { 
        this.str = str;
        
    };
    set prepend(str) { };
    set pad(str) { };
}
const builder = new StringBuilder(".");
console.log(builder.value);
