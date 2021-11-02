var pegaTime1=document.querySelector("#time1");
var pegaCard1=document.querySelector("#card1");
pegaTime1.addEventListener('click', ()=>{
  pegaCard1.style.left='1vw';
  pegaCard1.style.transition='.5s';
  pegaCard2.style.left="-100vw";
  pegaCard3.style.left="-100vw";
});

var pegaTime2=document.querySelector("#time2");
var pegaCard2=document.querySelector("#card2");
pegaTime2.addEventListener('click', ()=>{
  pegaCard2.style.left='1vw';
  pegaCard2.style.transition='.5s';
  pegaCard1.style.left="-100vw";
  pegaCard3.style.left="-100vw";
});

var pegaTime3=document.querySelector("#time3");
var pegaCard3=document.querySelector("#card3");
pegaTime3.addEventListener('click', ()=>{
  pegaCard3.style.left='1vw';
  pegaCard3.style.transition='.5s';
  pegaCard1.style.left="-100vw";
  pegaCard2.style.left="-100vw";
  
});


var pegaBtn1=document.querySelector("#btn1");
pegaBtn1.addEventListener('click', ()=>{
  pegaCard1.style.left="-100vw";
});

var pegaBtn2=document.querySelector("#btn2");
pegaBtn2.addEventListener('click', ()=>{
  pegaCard2.style.left="-100vw";
});

var pegaBtn3=document.querySelector("#btn3");
pegaBtn3.addEventListener('click', ()=>{
  pegaCard3.style.left="-100vw";
});

/* links 
var pegaLink1=document.querySelector("#apostalink1");
*/
