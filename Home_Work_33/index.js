var arrList = [1, 2,[1.1,1.2,1.3],3,4]

function generateList(arrList) {

  return arrList.reduce(function(ul, arrList) {
    const li = document.createElement('li');

    if (!Array.isArray(arrList)) {
      li.innerText = arrList;
    } else {
      const new_ul_element = generateList(arrList);
      li.append(new_ul_element);
    }

    ul.appendChild(li);
    return ul;
    },document.createElement('ul'));
}

document.body.append(generateList(arrList));
    