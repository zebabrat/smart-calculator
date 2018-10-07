class SmartCalculator {
  constructor(initialValue) {
    this.number = initialValue;
  }

  add(number) {
    this.number = this.number + "+" + number;
    // console.log(this)
    return this
  }

  subtract(number) {
    this.number = this.number + "-" + number;
    return this
  }

  multiply(number) {
    this.number = this.number + "*" + number;
    return this
  }

  devide(number) {
    this.number = this.number + "/" + number;
    return this
  }

  pow(number) {
    this.number = this.number + "**" + number;
    return this
  }
  valueOf() {
    let result = eval(this.number);
    return result
  }
}

module.exports = SmartCalculator;
