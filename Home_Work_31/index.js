const searchItem = document.querySelectorAll('.target');
const itenInfo = document.querySelectorAll('.hiden');
searchItem.forEach(target => {
  const choseTarget = target.querySelector('.clicks ');

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







