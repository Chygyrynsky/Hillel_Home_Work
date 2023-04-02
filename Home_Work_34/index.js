const searchItem = document.querySelectorAll('.category_target');

const itemInfo = document.querySelectorAll('.category_selector');

const buyButton = document.querySelectorAll('.cards_selector');

const smartSelection = document.querySelectorAll('.smart_selection');

const test = document.querySelectorAll('.element.style.display');

const orderForm = document.getElementById('center_side_window')

const nameChange = document.getElementById('sofa')


buyButton.forEach(cards_selector => {
  const buttonTarget = cards_selector.querySelector('.btn-primary');
  buttonTarget.addEventListener('click', function handleClicks() {
    nameChange.innerHTML = `<h1>Форма замовлення<h1/>`
    orderForm.innerHTML = `
    <form class="row g-3 needs-validation js-form" id="registrationForm">
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Ім'я</label>
          <input type="text" class="input form-control js-input" placeholder="Ім'я" id="validationCustom01"  name="name" >
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Прізвище</label>
          <input type="text" class="input form-control js-input" placeholder="Прізвище" id="validationCustom02" name="surname">
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Місто</label>
          <select class="input form-select js-input" id="validationCustom04" name="city" >
            <option selected disabled value="">Обирайте...</option>
            <option>Одеса</option>
            <option>Миколаiв</option>
            <option>Киiв</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
          <div class="input-group" id="size">
            <span class="input-group-text ">Коментар до замовлення</span>
            <textarea class="input form-control js-input" name="adress" aria-label="With textarea"></textarea>
          </div>
      <p>Форма оплати:</p>
        <div class="form-check" >
            <input class="input form-check-input js-input-checkbox" type="radio" name="exampleRadios" id="exampleRadios1" value=" Післяплата" >
            <label class="form-check-label" for="exampleRadios1">
            Післяплата
            </label>
          </div>
          <div class="form-check">
            <input class="input form-check-input js-input-checkbox" type="radio" name="exampleRadios" id="exampleRadios2" value="Банківська картка">
            <label class="form-check-label" for="exampleRadios2">
            Банківська картка
            </label>
          </div>
          <div class="form-check">
          <label for="quantity">Кількість продукції, що купується (Вiд 1 до 10):</label>
          <input class="input js-input" type="number" id="quantity" name="quantity" min="1" max="10">
          </div>
          <select class="input form-select js-input-selection" aria-label="Склад Нової пошти для надсилання">
            <option selected>Склад Нової пошти для надсилання</option>
            <option value="Отделение №3">Отделение №3	Одесса, ул. Дальницкая, 23/4</option>
            <option value="Отделение №7">Отделение №7	Одесса, ул. Жуковского, 10</option>
            <option value="Отделение №9">Отделение №9	Одесса, ул. Сегедская, 18</option>
          </select>
        <div class="col-12">
                <button class="btn btn-primary test" type="submit" >Замовити</button>
        </div>
      </form>
  `;

  let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputCheckbox = document.querySelector('.js-input-checkbox'),
  inputSelectionbox = document.querySelector('.js-input-selection'),
  option = document.getElementsByName('exampleRadios');

    form.onsubmit = function () {
      let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

      formInputs.forEach(function (input) {
        if (input.value === '') {
          input.classList.add('error');

        } else {
          input.classList.remove('error');
        }
      });


      if (emptyInputs.length !== 0) {
        return false;
      }

      if (!(option[0].checked || option[1].checked)) {
        alert("Оберiть Форму оплати !!!");
        inputCheckbox.classList.add('error');
        return false;
      }

      if (inputSelectionbox.selectedIndex == 0) {
        alert("Оберiть Склад Нової пошти для надсилання");
        inputSelectionbox.classList.add('error');
        return false;
      }
      const formElement = document.getElementById('registrationForm');
      formData = new FormData(formElement);
      const name = formData.get('name');
      const surname = formData.get('surname');
      const city = formData.get('city');
      const adress = formData.get('adress');
      const gender = formData.get('exampleRadios');
      const quantity = document.getElementById("quantity").value;
      const warehouse =  inputSelectionbox.value;  
  
  function renderDetails() {
    nameChange.innerHTML = `<h1>Ваше замовлення<h1/>`
    orderForm.innerHTML = `
      <table class="table table-dark table-striped-columns">
      <tbody>
      <tr><th>Ім'я</th><th>Прізвище</th><th>Форма оплати</th><th>Мicто</th><th>Коментар</th><th>Кiлькicть товару</th><th>Cклад</th></tr>
      <tr><td>${name}</td><td>${surname}</td><td>${gender}</td><td>${city}</td><td>${adress}</td><td>${quantity}</td><td>${warehouse}</td></tr> 
      </tbody>
      </table>
    `;

  }
  renderDetails();

    }
  });
});

let element = document.querySelector('.card_five')
let element1 = document.querySelector('.card_six')
let element2 = document.querySelector('.card_seven')
let element3 = document.querySelector('.card_eight')
let element4 = document.querySelector('.card_nine')
let element5 = document.querySelector('.card_first')
let element6 = document.querySelector('.card_second')
let element7 = document.querySelector('.card_third')
let element8 = document.querySelector('.card_four')


itemInfo.forEach(smart_selection => {
  const smartTarget = smart_selection.querySelector('.clock');
  smartTarget.addEventListener('click', function handleClik(event) {

    const class6 = event.target.classList.contains('smartSelection_1')
    const class7 = event.target.classList.contains('smartSelection_2')
    const class8 = event.target.classList.contains('smartSelection_3')
    const class9 = event.target.classList.contains('smartSelection_4')

    if (class6) {
      if (element5.style.display = "block") {
        element6.style.display = "none";
        element7.style.display = "none";
        element4.style.display = "none";
        element3.style.display = "none";
        element2.style.display = "none";
        element1.style.display = "none";
        element.style.display = "none";
      }
    }
    else if (class7) {
      if (element6.style.display = "block") {
        element5.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
        element4.style.display = "none";
        element3.style.display = "none";
        element2.style.display = "none";
        element1.style.display = "none";
        element.style.display = "none";
      }
    }
    else if (class8) {
      if (element7.style.display = "block") {
        element5.style.display = "none";
        element6.style.display = "none";
        element8.style.display = "none";
        element4.style.display = "none";
        element3.style.display = "none";
        element2.style.display = "none";
        element1.style.display = "none";
        element.style.display = "none";
      }
    }
    else if (class9) {
      if (element8.style.display = "block") {
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element4.style.display = "none";
        element3.style.display = "none";
        element2.style.display = "none";
        element1.style.display = "none";
        element.style.display = "none";
      }
    }
  });
});

itemInfo.forEach(category_target => {
  const choseTargetTest = category_target.querySelector('.clock');
  choseTargetTest.addEventListener('click', function handleClicks(event) {

    const class1 = event.target.classList.contains('tvSelection_1')
    const class2 = event.target.classList.contains('tvSelection_2')
    const class3 = event.target.classList.contains('tvSelection_3')
    const class4 = event.target.classList.contains('tvSelection_4')
    const class5 = event.target.classList.contains('tvSelection_5')

    if (class1) {
      if (element.style.display = "block") {
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
      }
    }
    else if (class2) {
      if (element1.style.display = "block") {
        element2.style.display = "none";
        element3.style.display = "none";
        element4.style.display = "none";
        element.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
      }
    }
    else if (class3) {
      if (element2.style.display = "block") {
        element.style.display = "none";
        element1.style.display = "none";
        element3.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
      }
    }
    else if (class4) {
      if (element3.style.display = "block") {
        element.style.display = "none";
        element1.style.display = "none";
        element2.style.display = "none";
        element4.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
      }
    }
    else if (class5) {
      if (element4.style.display = "block") {
        element.style.display = "none";
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
        element5.style.display = "none";
        element6.style.display = "none";
        element7.style.display = "none";
        element8.style.display = "none";
      }
    }
  });
});


searchItem.forEach(target => {
  const choseTarget = target.querySelector('.clicks ');

  choseTarget.addEventListener('click', function handleClick(event) {
    const firstClass = event.target.classList.contains('wc')
    const twoClass = event.target.classList.contains('zoo')
    const threeClass = event.target.classList.contains('tech')
    const fourClass = event.target.classList.contains('house')
    const fiveClass = event.target.classList.contains('smart')

    let hidenElement = document.querySelector('.hiden')
    let hidenElement1 = document.querySelector('.hiden1')
    let hidenElement2 = document.querySelector('.hiden2')
    let hidenElement3 = document.querySelector('.hiden3')
    let hidenElement4 = document.querySelector('.hiden4')

    if (firstClass) {
      if (hidenElement.style.display = "block") {
        hidenElement1.style.display = "none";
        hidenElement2.style.display = "none";
        hidenElement3.style.display = "none";
        hidenElement4.style.display = "none";
      }
    }
    else if (twoClass) {
      if (hidenElement1.style.display = "block") {
        hidenElement.style.display = "none";
        hidenElement2.style.display = "none";
        hidenElement3.style.display = "none";
        hidenElement4.style.display = "none";
      }
    }
    else if (threeClass) {
      if (hidenElement4.style.display = "block") {
        hidenElement.style.display = "none";
        hidenElement2.style.display = "none";
        hidenElement3.style.display = "none";
        hidenElement1.style.display = "none";
      }
    }
    else if (fourClass) {
      if (hidenElement3.style.display = "block") {
        hidenElement.style.display = "none";
        hidenElement2.style.display = "none";
        hidenElement4.style.display = "none";
        hidenElement1.style.display = "none";
      }
    }
    else if (fiveClass) {
      if (hidenElement2.style.display = "block") {
        hidenElement.style.display = "none";
        hidenElement3.style.display = "none";
        hidenElement4.style.display = "none";
        hidenElement1.style.display = "none";
      }
    }
  });
});











