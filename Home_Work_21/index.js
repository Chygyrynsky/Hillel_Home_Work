class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

class Flat {
  people = [];

 setPerson(person){
  if (person instanceof Person) {
    this.people.push(person);
  } else {
    console.log(" People aacept only instance of class Person ")
  }
 }
}

class Build {
  constructor(maxLength) {
    this.flats = [];
    this.maxLength = maxLength;
  }


setFlat(flat){
  if (this.flats.length < this.maxLength) {
    if (flat instanceof Flat) {
      this.flats.push(flat);
    } else {
      console.log("Flats aacept only instance of class Flat ");
    }
  } else {
    console.log(`Max flat length ${this.maxLength}`);
    }
  }
}

  const person1 = new Person('Максим', "24");
  const person2 = new Person('Светлана', "36");
  const person3 = new Person('Ирина', "23");

  const flat1 = new Flat();
  const flat2 = new Flat();
  const flat3 = new Flat();

  const build = new Build (3);

  flat1.setPerson(person1);
  flat2.setPerson(person2);
  
 

  build.setFlat(flat1);
  build.setFlat(flat2);
  build.setFlat(flat3);

  console.log(person1);
  console.log(person2);
  console.log(flat1);
  console.log(flat2);
  console.log(build);
  
