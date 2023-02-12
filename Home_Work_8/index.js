let year = prompt ('Введіть рік народження: ');

let city = prompt ('Введіть  місто в якому живете: ');

let sport = prompt ('Введіть улюблений вид спорту: ');


// УСЛОВИЯ ВОЗРАСТ

if (year === null || !year.trim()) {
  alert( "Ви не ввели свiй рiк народження !!!" );
  
} 

const age = ` Тобi ${2023 - Number(year)} рокiв `; 

// УСЛОВИЯ ГОРОД

let cityFrom;

if (city === null || !city.trim()) {
  alert("Ви не ввели мicто в якому живете !!!");
}

else if (city === "Київ") {

  cityFrom = "Ти живеш у столиці Украiни";
 }
else if (city === "Вашингтон") {

  cityFrom = "Ти живеш у столиці США";
}
else if (city === "Лондон") {

  cityFrom = "Ти живеш у столиці Великої Британiї";

}
else {

  cityFrom = ` Ти живеш у мicтi :  ${city} `;
}

// УСЛОВИЯ СПОРТ

let sportFavotite;

if (sport === null || !sport.trim()) {
  alert( "Ви не ввели свiй улюблений вид спорту!!!" );
  
} 

else if (sport === "Футбол") {

  sportFavotite = "Круто! Хочеш стати як Златан Iбрагимович ;-)";
 }
else if (sport === "Тенic") {

  sportFavotite = "Круто! Хочеш стати як  Рафаэль Надаль ;-)";
}
else if (sport === "Баскетбол") {

  sportFavotite = "Круто! Хочеш стати як  Майкл Джордан ;-)";

}
else {

  sportFavotite = ` Твiй улюбленний вид спорту :  ${sport} `;
}

alert(`${age}\n${cityFrom}\n ${sportFavotite}`);



 
   



        
                           

                   