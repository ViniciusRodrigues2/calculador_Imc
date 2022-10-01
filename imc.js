(()=>{
    'use strict';

    const form = document.querySelector('#form');
    const setResult = (e)=>{
        e.preventDefault();

        const pesoInput = document.querySelector('#peso');
        const alturaInput = document.querySelector('#altura');

        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);
        
        if((!peso) && (!altura)){setImc('peso e altura invalidos',false); pesoInput.classList.add('badInput',false); alturaInput.classList.add('badInput',false);return;}
        if(!peso){
            setImc('peso invalido',false);
            return;
        }
        if(peso > 595){
            setImc(`peso maxíma (Ex: 595kg)`,false);
            return;
        }
        if(!altura){
            setImc('altura invalido',false)
            return;
        }
        if(altura < 1.30){ 
            setImc(`altura miníma (Ex: 1.30)`,false)
            return;
        }
        
        const imc = getImc(peso,altura);
        const nivel = getNivel(imc);
        
        const msg = `Seu IMC é ${imc} (${nivel})`;
        setImc(msg,true);
    }
    form.addEventListener('submit',setResult);

    const paragraf = ()=>{
        const newParagraf = document.createElement('p');
        return newParagraf;
    }
    const getNivel = (imc)=>{
        const nivel = [
            "Magreza",
            "Peso Normal",
            "SobrePeso",
            "obesidade Grau |",
            "Obesidade Grau ||",
            "Obesidade Grau |||"
        ]
        
        if(imc >=39.9) return nivel[5];

        if(imc >= 34.9) return nivel[4]
    
        if(imc >= 29.9) return nivel[3];
    
        if(imc >= 24.9) return nivel[2]
    
        if(imc >= 18.5) return nivel[1];
    
        if(imc < 18.5) return nivel[0];
    }
    const getImc = (peso,altura)=>{
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }
    const setImc = (msg,isValid)=>{
        const result = document.querySelector('.result');
        result.innerHTML = '';
        const p = paragraf();
        if(isValid){
            p.classList.add('green')
        }else{
            p.classList.add('bad')
        }
        p.innerHTML = msg;
        result.appendChild(p)
    }
})();