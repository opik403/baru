const elementclose = document.getElementsByClassName('overlay');

for (let i = 0; i < elementclose.length; i++) {
    elementclose[i].addEventListener('click', function () {
        let url = window.location.href.substr(0, window.location.href.indexOf('#'))
        window.location = url;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.no-copy');
    elements.forEach(function(element) {
        element.addEventListener('copy', function(event) {
            event.preventDefault(); // Mencegah penyalinan teks
        });
    });
});

document.onkeydown = e => {
    if(e.key == "F12") {
        alert("Hayo mau ngapain :)")
        return false
    }
}

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    }

//Script for disabling right click on mouse
var message="Function Disabled!";
function clickdsb(){
if (event.button==2){
alert(message);
return false;
}
}
function clickbsb(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}
}
}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickbsb;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickdsb;
}

document.oncontextmenu=new Function("alert(message);return false")

// disable save-as
$(document).bind("contextmenu",function(e) {
    e.preventDefault();
   });
   $(document).keydown(function(e){
       if(e.ctrlKey && (e.which === 83)){
          e.preventDefault();
          return false;
       }
   });