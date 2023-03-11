// function onLoadFunct(){

// document.querySelector("btnPrompt").addEventListener('click', prompt)

// function prompt () {
//     link = prompt("Введіть посилання:");
//     if (link.startsWith('http') === false && link.startsWith('https') === false) {
//         link = `https://${link}`;
//     }
// }

// document.querySelector("#btnLink").addEventListener("click", transferLink)

// function transferLink () {
//         location.href = link;
// }
// }
let btnGetLink = document.querySelector("#btnPrompt");
let btnGoTolLink = document.querySelector("#btnLink");
let link;

btnGetLink.addEventListener('click', function () {
    link = prompt("Введите ссылку");
    if (link.startsWith('http') === false && link.startsWith('https') === false) {
        link = `https://${link}`;
    }
})


btnGoTolLink.addEventListener("click", function () {
    if (!link) {
        alert('Нет ссылки');
    } else {
        location.href = link;
    }
})