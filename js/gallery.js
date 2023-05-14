let Big =document.querySelector('.BigImg');
let smallImg=document.querySelector('.smallImg');
let bigImg = Big.querySelector('img');
let smallImgs  = smallImg.querySelectorAII('img');

for  (let img of smallImgs)  {
    
   img.onclick=function(){
    bigimg.scr = img.scr;
   }
}                               