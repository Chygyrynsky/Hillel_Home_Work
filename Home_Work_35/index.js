const formElement = document.getElementById('registrationForm');
const mytable = document.getElementById('mytable')

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  const name = formData.get('name');
  const surname = formData.get('surname');
  const dob = formData.get('dob');
  const city = formData.get('city');
  const adress = formData.get('adress');
  const gender = formData.get('exampleRadios')

  function getCheckedCheckBoxes() {
    var selectedCheckBoxes = document.querySelectorAll('input.language:checked');
    var checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);
    return checkedValues;
  }

  renderDetails();
  function renderDetails() {
    mytable.innerHTML = `
      <table class="table table-dark table-striped-columns">
      <tbody>
      <tr><th>Ім'я</th><th>Прізвище</th><th>Дата народження</th><th>Стать</th><th>Місто</th><th>Адреса</th><th>Мови</th></tr>
      <tr><td>${name}</td><td>${surname}</td><td>${dob}</td><td>${gender}</td><td>${city}</td><td>${adress}</td><td>${getCheckedCheckBoxes()}</td></tr> 
      </tbody>
      </table>
    `;
  }
});