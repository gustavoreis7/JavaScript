function criacalc(){
  return{
    display: document.querySelector('.display'),

    inicia(){
      this.clickbtn();
      this.keypressenter();
    },

    keypressenter(){
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13){
          this.realizaconta();
        }
      });
    },
    clearDisplay(){
      this.display.value = '';
    },
    delone(){
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaconta(){
      let conta = this.display.value;
      try{
        conta = eval(conta);

        if(!conta){
          alert('conta invalida');
          return;
        }
        this.display.value = String(conta);
      }catch(e){
        alert('conta invalida');
        return;
      }
      },
    

    clickbtn(){
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')){
          this.btnDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clear')){
          this.clearDisplay();

        }
        if(el.classList.contains('btn-del')){
          this.delone();
        }
        if(el.classList.contains('btn-eq')){
          this.realizaconta();
        }
        
      });
    },
    btnDisplay(valor){
      this.display.value += valor;
    }


   };
}
const calc = criacalc();
calc.inicia();





