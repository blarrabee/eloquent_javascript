var wrapper = function(i){
    var ex = (i + 33);
    return function(){ return ex; };
};

var x = wrapper(2);
var y = wrapper(44);


console.log(x());
console.log(y());
