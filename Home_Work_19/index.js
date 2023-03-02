let firstNumber  = prompt("Введiть перше число:")
firstNumber = Number(firstNumber);
let secondNumber  = prompt("Введiть друге число:")
secondNumber = Number(secondNumber);
let thirdNumber  = prompt("Введiть третє число:")
thirdNumber = Number(thirdNumber);
function closures (firstNumber) {
  console.log(`sum(${firstNumber}) = ${firstNumber}`);
  return function (secondNumber) {
      const result = firstNumber + secondNumber
      console.log(`sum(${secondNumber}) = ${result}`);
      return function (thirdNumber) {
          const secondResult = result + thirdNumber;
          console.log(`sum(${thirdNumber}) = ${secondResult}`)
      }
  }
}
closures(firstNumber)(secondNumber)(thirdNumber);