// #1 Вивести на сторінку в один рядок через кому числа від 10 до 20.

let str = '';
const age = ","; 
for (let i = 10; i < 21; i++) {
  str = str + age + i ;
}
alert(str);
console.log(str);




// 2.Вивести квадрати чисел від 10 до 20.

// for (let i = 9; i <= 21; i++) {
// const iterationNumber =i+1
// let multiply = iterationNumber*iterationNumber;
// console.log(multiply);
// }



// 3.Вивести таблицю множення на 7.
// const sevenNumber = 7;
// for (let i = 1; i <= 13; i++) {
//   let multiplyResult = sevenNumber * i;
//   console.log(i + "*" + sevenNumber + "=" + multiplyResult)
//   }


// // #4 найти суму всіх цілих чисел від 1 до 15.


  // let sum = 0;
  // for (let i = 1; i <= 15; i++) {
  //   sum += i;
  // }
  // alert( sum );


  // 5.Знайти добуток усіх цілих чисел від 15 до 35.

    // let totalMultiplication = 1;

    // for (let i = 15; i <= 35; ++i) {

    // totalMultiplication = totalMultiplication*i;

    // }

    // alert( totalMultiplication);


    // 6. найти середнє арифметичне всіх цілих чисел від 1 до 500.

    // let sum = 0;
    // let count = 0;

    // for (let i = 1; i <= 500; i++) {
    // sum += i;
    // }

    // let result = sum/500;
    // console.log(sum);

    // alert(result);

    // 7.Вивести суму лише парних чисел в діапазоні від 30 до 80.

    // let sum = 0;
    // for (let i = 30; i <= 80; ++i) {
    //   if (i % 2 == 0) {
    //     sum = sum + i;
    //   }
    //  }
    // alert( sum );

    // 8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

    //  let sum = 0;
    // for (let i = 100; i <= 200; ++i) {
    //   if (i % 3 == 0) {
    //     console.log(i);
    //   }
    //  }
     

  
    // 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники

    // const Nune = 20;
    // const count = 0;
    // for (let i = 0; i <= 20; i++) {
    // const Number =i+1;

    // const res = (Nune/Number).toString().split(".");

    // if (!res[1]) {
    //       console.log(res[0]);
    //       alert(res);
    //   }
    // }


    // 10.Визначити кількість його парних дільників.
    // const Nun = 20;
    // let count = 0;

    // for (let i = 0; i <= 20; i++) {
    // let first =i+1;

    // const res = (Nun/first).toString().split(".");

    // if (!res[1]) {
    //   if (first % 2 === 0) {
    //       count = count + 1;
    //     }
      
    //   }

    // }
    // console.log(count);


    // 11.Знайти суму його парних дільників.

    // const constNumber = 20;
    // let loopCounter = 0;
    // let sum = 0;

    // for (let i = 0; i <= 20; i++) {
    // let iteratorIndification =i+1;

    // const res = (constNumber/iteratorIndification).toString().split(".");

    // if (!res[1]) {
      
    //   if (iteratorIndification % 2 === 0) {
    //     sum = sum + iteratorIndification;
    //     loopCounter = loopCounter + 1;  
    //     }
    //   }
    // }
    // console.log(sum);

    // 12.Надрукувати повну таблицю множення від 1 до 10.

    // i = 1;
    // while (i <= 10) {
    // k = 2;
    // while (k <= 9) {
    // document.write(i + ' * ' + k + ' = ' + (i * k) + '<br>');
    // k++
    // }
    // document.write('________<br>')
    // i++
    // }



