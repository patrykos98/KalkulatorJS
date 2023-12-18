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
        
        let tablicaDoDzialan=[...wynik.innerText];
        let wynikLiczba;
        let a;
        let b;

        
        if(tablicaDoDzialan[0]=='0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9')
        {
            a=parseInt(tablicaDoDzialan[0]);
            b=parseInt(tablicaDoDzialan[2]);
            switch(tablicaDoDzialan[1]){
                case'+': wynikLiczba=a+b;break;
                case'-': wynikLiczba=a-b;break;
                case'/': wynikLiczba=a/b;break;
                case'*': wynikLiczba=a*b;break;
                case'^': wynikLiczba=Math.pow(a,b);
            }
        }
        else{
            wynik.innerText="ERR";
        }
        
        wynik.innerText=a+tablicaDoDzialan[1]+b+'='+wynikLiczba;

        setTimeout(()=>{wynik.innerText=''},3000)

        

        
    }
    else{
        wynik.innerText+=btn.innerText;
    };
   })

})