'use strict';

var message = "hello";
var main = document.getElementById('main');
var load = function(message){
    main.parentNode.replaceChild(message, main);
};
