
var getAdder = function () {
   var res = 0; 
    return function(x) 
    { 
      res += x; 
        return res; 
    } 
  };
var sum = getAdder();
console.log(sum(3));
console.log(sum(5)); 
console.log(sum(20));



 
  
