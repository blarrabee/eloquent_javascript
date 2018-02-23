var landscape = function() {
  var  result = "";
  var flat = function(size) {
      for(var count = 0; count < size; count ++){
          result += "_";
      }
      
  };
  var mountain = function(size) {
      result += "/";
      for(var count = 0; count < size; count ++){
          result += "'";
      }
      result += "\\";
  };
    flat(8);
  mountain(4);
  flat(6);
  mountain(10);
  flat(3);
  return result;
};
console.log(landscape());