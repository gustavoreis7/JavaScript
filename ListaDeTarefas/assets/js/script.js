const form = document.querySelector(".form");

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputaltura = e.target.querySelector('.altura');
    const inputpeso = e.target.querySelector('.peso');

    const altura = Number(inputaltura.value);
    const peso = Number(inputpeso.value);

    if(!altura){
        setresult("poulds invalid", false);
        return;

    }
    if(!peso){
        setresult("height invalid", false);
        return;

    }
    const imc = getimc(altura, peso);
    const nivelimc = getnivel(imc);
    const msg = `seu IMC é ${imc} (${nivelimc})`;
    setresult(msg, true);
  console.log(imc, nivelimc);


  
});

  function criaP(){
    const p = document.createElement('p');
    return p; 

  }
  function getnivel(imc){
    const nivel = ['abaixo do peso',
        'peso normal', 'sobrepeso', 
        'obesidade grau 1', 'obesidade grau 2', 
        'obesidade grau 3'];

        if (imc >= 40) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >=18.5) return nivel[1];
        if (imc<18.5) return nivel[0];
  }

 
  function getimc(altura, peso){

    const imc = peso / altura**2;
    return imc.toFixed(2);
  }

  function setresult(msg, isvalid){
    const result = document.querySelector('.result');
    result.innerHTML = '';
    const p = criaP();

    if (isvalid) {
        p.classList.add('pararesult');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    result.appendChild(p);
     
  }