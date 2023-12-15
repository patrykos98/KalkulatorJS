const buttons=document.querySelectorAll('button');
const wynik=document.querySelector('div p');

buttons.forEach(function(btn){
   btn.addEventListener('click',function(el){
    if(el.target.className==='ac'){
       wynik.innerText='';
    }else if(el.target.className==='del'){
        let tablicaZnakow=[...wynik.innerText];
        tablicaZnakow.pop();
        wynik.innerText=tablicaZnakow.join('');
    }else if(el.target.className==='wynik_btn'){
        //let tablicaDoDzialan=[...wynik.innerText];
        //console.log(tablicaDoDzialan);
        console.log(wynik.innerText);
        // tutaj wynik dzialania
    }
    else{
        wynik.innerText+=btn.innerText;
    };
   })

})