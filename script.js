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
        let wynikPrzedObliczeniem=wynik.innerText+'=';
        let tablicaDoDzialan=[...wynik.innerText];
        let wynikLiczba;
        
        function funkcjaTworzącaLiczbe(){
            
           tablicaDoDzialan.forEach(function(el){
            while(el!='*' & el!='/' & el!='^' & el!='+' & el!='-'){
                
            }
        })

        }
        //let iloscRownan=(tablicaDoDzialan.filter(el => el!=='1' & el!=='2' & el!=='3' & el!=='4' & el!=='5' & el!='6' & el!='7' & el!='8' & el!='9' & el!='0')).length;

        // tutaj wynik dzialania
    }
    else{
        wynik.innerText+=btn.innerText;
    };
   })

})