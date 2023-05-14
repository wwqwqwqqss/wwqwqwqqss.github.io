let likes= document.querySelectorAll('.like');
for(let like of likes){
let plus =like.querySelector('.plus');
let minus = like.querySelector('.minus');
let counter_element = like.querySelector('.counter')
let counter = 0;
plus.onclick=function(){
    counter++;
    if (counter>=1000){
        counter_element.innerText=Math.trunc(counter/1000)+"k";   
    }else{
    counter_element.innerText=counter;
    }
}
minus.onclick=function(){
    counter--;
    counter_element.innerText=counter;
}
}





















