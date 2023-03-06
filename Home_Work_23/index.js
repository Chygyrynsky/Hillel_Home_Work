class Student {
  constructor(firstName, lastName, birthday) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = birthday;
      this.marks = [];
      this._presence = new Array(25);
      this._current = 0;
  }

  get info() {
    console.log(`Студент: ${this.firstName} ${this.lastName} \nВiк: ${this.age}  `);
  }

  get age() {
      return new Date().getFullYear() - this.birthday;
  }

  get averageMark() {
      let count = 0,
          sum = this.marks.reduce((a, b) => { ++count; return a + b; }, 0);
      return count ? sum / count : 0;
  }

  get averagePresence() {
      let count = 0,
    sum = this._presence.reduce((a, b) => { ++count; return a + b; });
      return sum / 25;
  }

  
  present(mark) {
      if (this._current === this._presence.length)
          throw new RangeError (`Такого не може бути !!!`);
      this.marks[this._current] = mark;
      this._presence[this._current++] = true;
  }
  absent() {
      if (this._current === this._presence.length)
          throw new RangeError (`Такого не може бути !!!`)
      this._presence[this._current++] = false;
  }

  summary() {
    if (this.averageMark > 90 && this.averagePresence > 0.9 )
        console.log("Загальне враження: Молодець!");
      else if (this.averageMark < 90 && this.averagePresence < 0.9)
      {
        console.log("Загальне враження: Редиска!");
       } else if ((this.averageMark < 90 || this.averagePresence < 0.9)) {
        console.log("Загальне враження: Добре, але можна краще ");
       }
  }

}

  const taras = new Student("Тарас", "Шевченко", 1984);
  const andriy = new Student("Андрiй", "Шевченко", 1965);
  const mariya = new Student("Марiя", "Шевченко", 1990);

  andriy.present(95);
  andriy.present(95);
  andriy.present(95);
 
  andriy.summary();

  andriy.info; 

  
  

  


 
 