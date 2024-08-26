let userName=prompt('Enter "ayas"');
let userPass=prompt("Enter 1234");
Number(userPass);
let p= document.querySelector(".loginformation");


if(userName=="ayas"){
    if(userPass==1234){
         p.innerHTML=("Username & Password Tik Ache.");
    }else{
        p.innerHTML=('Password Bhul! Enter 1234')
    }

    }else{
    p.innerHTML=("Username bhul.Enter 'ayas'")
 }




let btn=document.querySelector(".btn");
let bgclr=document.querySelector(".bgclr");

btn.addEventListener("click",function(){
 let red=Math.floor(Math.random()*255);
 let green=Math.floor(Math.random()*255);
 let blue=Math.floor(Math.random()*255);

 bgclr.style.background=`rgb(${red},${green},${blue})`
})

let progress=document.querySelector(".progress")
let demo=document.querySelector(".demo")

progress.addEventListener("input",function(){
    demo.innerHTML = Number(progress.value);
})

let inc=document.querySelector(".inc")
let dec=document.querySelector(".dec")
let input=document.querySelector(".input")

inc.addEventListener("click",function(){

    if((Number(input.value)+1)<=10){

        input.value= Number(input.value)+1;
       

    }else{
        inc.style.cursor="not-allowed";
       
    }

});
dec.addEventListener("click",function(){
    
   if(( Number(input.value)>1)){
    input.value= Number(input.value)-1;
       dec.style.cursor="pointer";
   }
   else{
      dec.style.cursor="not-allowed";
   }

   
});


