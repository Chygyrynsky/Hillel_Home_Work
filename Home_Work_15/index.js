const array = [" Orange", " Apple", " Cheryy", " Strawberry", " Blueberry", " Pumpkin", " Watermelon"];
alert(`Масив елементiв :${array}`);
let indexNumber = prompt(`Введіть індекс елемента, який хочете видалити: 0,1,2,3,4,5,6 ?`)

function removeElement(indexNumber) {
 
  array.splice(indexNumber, 1);
}
removeElement(indexNumber);
alert(array);


