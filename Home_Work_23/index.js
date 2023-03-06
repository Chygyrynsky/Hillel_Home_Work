class Student {
  constructor(firstName, lastName, birthday) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = birthday;
      this.marks = [];
      this._presence = new Array(5);
      this._current = 0;
  }

  get info() {
    console.log(`Студент: ${this.firstName} ${this.lastName} \nВiк: ${student.age} \nCередній бал :${student.averageMark.toFixed(2)} \nСереднє відвідування : ${student.averagePresence.toFixed(1)} `);
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
      return sum / 5;
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
    if (student.averageMark > 90 && student.averagePresence > 0.9 )
        console.log("Загальне враження: Молодець!");
      else if (student.averageMark < 90 && student.averagePresence < 0.9)
      {
        console.log("Загальне враження: Редиска!");
       } else if ((student.averageMark < 90 || student.averagePresence < 0.9)) {
        console.log("Загальне враження: Добре, але можна краще ");
       }
  }

}

  const student = new Student("Тарас", "Шевченко", 1984);
  const student1 = new Student("Андрiй", "Шевченко", 1935);
  const student2 = new Student("Марiя", "Шевченко", 1990);

  student.present(95);
  student.present(95);
  student.present(95);
  student.present(95);
  student.present(95);
  student.summary();

  student.info; 
  
        
  


 
 