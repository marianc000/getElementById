document.getElementById("a");
document.querySelector('#a');
a
//
function myGetElementById(id){
    return window[id];
};

myGetElementById("a")
//
document.getElementById("1");
document.querySelector('#1');
 
function myGetElementById(id){
    return window[id];
};

myGetElementById(1)
1
//
a='test';
document.getElementById("a");
document.querySelector('#a');
a
//
document.getElementById("parent").querySelector('#child');
document.getElementById("parent").getElementById('child');
//
document.getElementById("c");
document.querySelector('#c');
document.querySelectorAll('#c');
c