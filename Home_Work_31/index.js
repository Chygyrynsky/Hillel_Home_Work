const searchItem = document.querySelectorAll('.target');

const itemInfo = document.querySelectorAll('.test');

itemInfo.forEach(test=> {
  const choseTargetTest = test.querySelector('.clock');
  choseTargetTest.addEventListener('click', function handleClicks(event) {

    const class1 = event.target.classList.contains('hiden2')
    const class2 = event.target.classList.contains('hiden1')
    const class3 = event.target.classList.contains('hiden')
    const class4 = event.target.classList.contains('hiden3')
    const class5 = event.target.classList.contains('hiden4')


    let element = document.querySelector('.first')
    let element1 = document.querySelector('.second')
    let element2 = document.querySelector('.third')
    let element3 = document.querySelector('.four')
    let element4 = document.querySelector('.five')

    if (class1) {
      if (element.style.display = "block") {
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
        element4.style.display = "none";
      }
    }
    else if (class2) {
      if (element1.style.display = "block") {
        element2.style.display = "none";
        element3.style.display = "none";
        element4.style.display = "none";
        element.style.display = "none";
      }
    }
    else if (class3) {
      if (element2.style.display = "block") {
        element.style.display = "none";
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
      }
    }
    else if (class4) {
      if (element3.style.display = "block") {
        element.style.display = "none";
        element1.style.display = "none";
        element2.style.display = "none";
        element4.style.display = "none";
      }
    }
    else if (class5) {
      if (element4.style.display = "block") {
        element.style.display = "none";
        element1.style.display = "none";
        element2.style.display = "none";
        element3.style.display = "none";
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







