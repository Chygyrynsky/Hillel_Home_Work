class Man {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    console.log(`Iмʼя та вік власника: ${this.name} ${this.age} рокiв.`)
  }
}

class Car {
  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
  }

  owner(owner) {
    if (owner.age < 18) {
      console.log(`${owner.name} - вам ще рано керувати автомобілем !!!`)
    } else { 
      this.ownerName = owner;
    }
  }

  get carInfo() {
    console.log(`Автiвка: ${this.brand} ${this.model} ${this.year}  Номерний знак: ${this.number}`);
    this.ownerName ? this.ownerName.info : console.log(`У ${this.brand} ${this.model} немає власника !!!`);
  }
}

  const maryna = new Man('Марина', 30);
  const andriy = new Man('Андрiй', 38);
  const dasha = new Man('Даша', 25);

  const toyota = new Car ('Toyota', 'Camry', 2013, 'ВН1184ЕК');
  const bmw = new Car ('BMV', 'X-5', 2017, 'ВН4422ОН');
  const tesla = new Car ('Tesla', 'Model - X', 2020, 'ВН8432ОА');

  toyota.owner(maryna);
  bmw.owner(andriy);
  tesla.owner(dasha);

  toyota.carInfo;
  bmw.carInfo;
  tesla.carInfo;

 


