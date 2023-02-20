const array = [1, 2, 3, 4, 5, 6, 7];
let indexNumber = prompt(`Введіть індекс елемента, який хочете видалити: ${array}`)

function removeElement(indexNumber) {
  delete array[indexNumber];
}
removeElement(indexNumber);
alert(array);


