let password = prompt("Введіть бажану довжину пароля для генерації:")
function generateKey(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length ; i++) {
    result =result+characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

alert(generateKey(password));


