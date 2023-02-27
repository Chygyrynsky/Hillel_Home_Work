  // Перша частина - сумма усiх чисел массива
  let arrayVariety = [1,13,33,"Orange",{name:"Vasya"},44,88];
  let count = 0;
  console.log(arrayVariety.reduce((a, b) => {
    if (typeof b == "number" && !isNaN(b)) {
      ++count;
      return a = (a + b);
    } else return a
  }, 0) / count || 0);

  // Друга частина-Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak

  function doMath(x, znak, y) {
    if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Ошибка';
    return eval(x + znak.replace('^', '**') + y)
  }
  const x = prompt('Введите x');
  const y = prompt('Введите y');
  const znak = prompt('Введите знак');
  alert(doMath(x, znak, y))

  // Третя частина - Написати функцію заповнення даними користувача двомірного масиву

  const mainN = prompt('Введите длину главного массива');
  const subN = prompt('Введите длину внутренних массивов');
  const arr = new Array(+mainN).fill(0)
  .map((_, ind) =>
    new Array(+subN).fill(0).map((_, i) => prompt(`Введите элемент ${i} в подмассиве ${ind}`)));
  alert('Ваш массив:' + arr.map(subArr => '\n' + subArr));

  // Четверта частина Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.

  let textString = prompt("Введiть текст:")
  let letterDelete = prompt("Введіть букви які ви бажаєте видалити:")

  function newWords(arr, elem) {
    textString = textString.replace(letterDelete.toUpperCase(), '');
}

newWords(textString, letterDelete);

console.log(textString);
alert(textString);




