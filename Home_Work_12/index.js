
  let numbers = [];

  while (true) {

    let value = prompt("Введіть число для поміщення його в масив");

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);

  }
  
  alert(`Масив що ви ввели :  ${numbers}` );

  numbers.sort((a, b) => a - b);

  alert(`Відсортований масив :  ${numbers}` );

  numbers.splice(2, 2);

  alert(`Масив відсортований та виделено елементи з другого по четвертий :  ${numbers}` );
 









