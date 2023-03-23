class SuperMath {
  check(obj) {
    const confirmMessage = confirm(`Чи хочете ви зробити математичну операцію ${obj.znak} з числами ${obj.X} та ${obj.Y}?`);
    if (confirmMessage === true) {
      return this.calculate(obj.X, obj.Y, obj.znak);
    } else {
      return this.input();
    }
  }
  calculate(x, y, znak) {
    switch (znak) {
      case `+`:
        return x + y;

      case `-`:
        return x - y;

      case `*`:
        return x * y;

      case `/`:
        return x / y;

      case `%`:
        return x % y;

      default:
        console.log("Введить iнший математичний оператор");
        return this.input();
    }
  }

  input() {
    const x = +prompt("введіть перше число X:");
    const y = +prompt("Ввведіть друге число Y :");
    const znak = prompt("Виберіть математичний оператор (+ , -, /, *, % :)");
    const operators = ["+", "-", "/", "*", "%"];

    if (operators.includes(znak)) {
      return this.calculate(x, y, znak);
    } 
    debugger;
  }

}

const supermath = new SuperMath();
const obj = {X:111, Y:6, znak:"*"}

const result = supermath.check(obj);
console.log(result);