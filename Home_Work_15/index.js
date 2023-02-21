const arrayOfFruits = [ "ORANGE",  "APPLE",  "CHERRY",  "STRAWBERRY",  "BLUEBERRY",  "PUMPKIN"];
alert(`Масив елементiв :\n${arrayOfFruits}`);
let indexNumber = prompt(`Введіть  елемент, який хочете видалити: ?`)

removeElement(arrayOfFruits, indexNumber.toUpperCase());

function removeElement(array, item) {
  for (let index = 0; index < array.length; index++) {
    if (item === array[index]) {
      array.splice(index, 1);
    }
  }
}

alert(arrayOfFruits);


