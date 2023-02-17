
  let numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
  let sum =0;
  let  sumPositive = 0;
  let sumEqual = 0;
  let multiplication = 1; 
  let newArr = 0;

  let result = numbers.filter(function(elem) {
    if (elem >= 0) {
      return true;
    } else {
      return false;
    }
  });

  for (let i = 0; i < result.length; i++) {
    multiplication *= result[i];
  }


  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  
  let maxNumber = (a, b) => {
    return a > b ? a : b;
},
    minNumber = (a, b) => {
        return a < b ? a : b
    };

    let minimumResult = numbers.filter(function(minimum) {
      if (minimum < 0) {
        return true;
      } else {
        return false;
      }
    });

    let positiveResult = numbers.filter(function(positive) {
      if (positive >= 0 && positive % 2 === 0 ) {
        return true;
      } else {
        return false;
      }
    });

    for (let i = 0; i < positiveResult.length; i++) {
      sumPositive += positiveResult[i];
    }


    let positiveEqualResult = numbers.filter(function(equal) {
      if (equal >= 0 && equal % 2 !== 0 ) {
        return true;
      } else {
        return false;
      }
    });

    for (let i = 0; i < positiveEqualResult.length; i++) {
      sumEqual += positiveEqualResult[i];
    }

console.log(result);
console.log(numbers.indexOf(numbers.reduce(maxNumber)))
console.log(numbers.indexOf(numbers.reduce(minNumber)))
console.log(numbers.reduce(minNumber))
console.log(numbers.reduce(maxNumber))
console.log(minimumResult.length);
console.log(positiveResult.length);
console.log(positiveEqualResult.length);
console.log(sumPositive);
console.log(sumEqual);
console.log(multiplication);


  
  alert( `Довжина масива : ${result.length} та сумма позитивних елементів : ${sum}
   \n Найменший елемент масиву :  ${numbers.reduce(minNumber)}    його iндекс ${numbers.indexOf(numbers.reduce(minNumber))}  
   \n Найбiльший елемент масиву : ${numbers.reduce(maxNumber)}      його iндекс ${numbers.indexOf(numbers.reduce(maxNumber))}
   \n Кількість негативних елементів масиву  :${minimumResult.length}
   \n Кількість парних позитивних елементів ${positiveResult.length} їх сума: ${sumPositive}
   \n Кількість непарних позитивних елементів: ${positiveEqualResult.length} їх сума : ${sumEqual}
   \n Добуток позитивних елементів : ${multiplication}` );
  
 













 









