var inpnum = document.querySelector('.num'),
inpchar = document.querySelector('.char'),
inpiter = document.querySelector('.iter'),
btn = document.querySelector('.clear'),
par = document.querySelector('textarea');


btn.addEventListener('click',function(){
    par.value = '';
});
var generate = function(){
    var word = inpchar.value;
    var passlength = inpnum.value;
    var iteration = inpiter.value;
    var passkey = ''; 
   for(var j =0 ;j < iteration;j++){
       passkey='';
        for(var i =0 ; i < passlength;i++){
            var rdkey = Math.floor(Math.random()*word.length);
            passkey += word[rdkey];
        }       
        par.value += passkey + '\n';
    }
};