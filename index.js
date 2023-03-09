
window.onload = function(){
   
document.getElementById("text").onfocus = function  ()  { 
    let div = document.crealement('div');
    document.body.append(div);
}

document.getElementById("text").onblur = function ()  { 
    const square = document.querySelector("div");
    square.remove();
}

}




