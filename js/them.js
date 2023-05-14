let theme =document.querySelector('.themebutton')
theme.addEventListener("click",function(){
 document.body.classList.toggle("dark");
})
/*
let post = document.querySelector('.post');
let more = post.querySelector('.more');
more.onclick = function(){
    alert("!");
    post.classList.remove('short');
}*/
var date = new Date();
document.body.style.backgroundColor= "rgb("+date.getUTCHours()*10.6+","+date.getMinutes()*4.25+","+date.getDay()* 8.5+")";   
  alert(date.getHours());

function playAudio (url){
  new Audio(url).play();
}

































































