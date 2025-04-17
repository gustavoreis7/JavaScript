function Calculadora(){
  this.display = document.querySelector('.display');
  

  this.inicia =  () => {
    this.click();
    this.enter();
  };

  this.enter = () => {
    document.addEventListener('keypress', e => {
      if(e.keyCode === 13) {
        this.realiza();
      }
    });
  };


  this.click = () => {
    document.addEventListener('click', e =>{
      const el = e.target;

      if(el.classList.contains('btn-num')) this.addnum(el);
      if(el.classList.contains('btn-del')) this.delone();
      if(el.classList.contains('btn-eq')) this.realiza();
      if(el.classList.contains('btn-clear')) this.clearall();


      
    });
  };

  this.realiza = () => {
    try{
      const conta = eval(this.display.value);

      if(!conta) {
        alert('conta invalida');
        return;
      }

      this.display.value = conta;

    }catch(e){
      alert('conta invalida');
      return;
    }
  };

  this.addnum = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clearall = () => this.display.value = '';
  this.delone = () => this.display.value = this.display.value.slice(0, -1);
};

const calculadora = new Calculadora();
calculadora.inicia();