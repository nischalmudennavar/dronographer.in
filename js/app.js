const texts=[" am a photographer"," shoot videos on drone"," am  a cinematographer"];

let count=0;
let index=0;
let currentText='';
let letter='';

(function type()
{
    if(count === texts.length){
        count=0;
    }
    currentText =texts[count];
    letter=currentText.slice(0, ++index);

    document.querySelector('#services').textContent = letter

    if(letter.length === currentText.length)
    {
        count++;
        index=0;
    }
    setTimeout(type,150)
}());


function menu(){

    var menuToggle=document.querySelector('.menu');
var menuDisplay=document.querySelector('.main-menu');
var menuLines=document.querySelector('.line');
var line1=document.getElementById('line1');
var line2=document.getElementById('line2');
var line3=document.getElementById('line3');




menuToggle.addEventListener('click',()=>{
    menuDisplay.classList.toggle('main-menu-active');
    menuLines.classList.toggle('line-active');
    line1.classList.toggle('active_line');
    line2.classList.toggle('active_line_2');
    line3.classList.toggle('active_line_3');
    console.log('clicked')

})

}

