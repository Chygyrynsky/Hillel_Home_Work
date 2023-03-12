document.querySelector("#buttonLink").addEventListener('click', promptME)
    
    function promptME () {
        link = prompt("Введіть посилання:");
        if (link.startsWith('http') === false && link.startsWith('https') === false) {
            link = `https://${link}`;
        }
    }
    
    document.querySelector("#transferLink").addEventListener("click", transferLink)
    
    function transferLink () {
            location.href = link;
    }
    
    