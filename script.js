//.bind(this))neste caso o valor de this continua sendo 'calculadora', caso eu não utilizasse bind o valor de this seria document.

/*function criaCalculadora(){
    return {
        display: document.querySelector('.display'),  
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
            this.display.focus();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.realizaConta()
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;
            
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                
                
                this.display.value = String(conta)
            }   catch(e){
                alert('conta inválida');
                return;
            }
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay(){
            this.display.value = ""
        },
        

        cliqueBotoes(){
            document.addEventListener('click', e => {//A utilização de arrow functions permite sempre que this continue tendo o valor inicial "calculadora"
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
                
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor
        },

    }


}

const calculadora = criaCalculadora();
calculadora.inicia();*/

function CriaCalculadora(){

    this.display = document.querySelector('.display');

    this.inicia = function(){
        this.cliqueBotoes();
        this.pressioneEnter();
        this.display.focus();
    };


    this.pressioneEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.realizaConta();
            }
        })
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', e =>{
            const el = e.target
            if(el.classList.contains('btn-num')){
               this.btnParaBotoes(el.innerText)
            }
            if(el.classList.contains('btn-clear')){
                this.display.value = ''
            }
            if(el.classList.contains('btn-del')){
                this.deletaUm();
            }
            if(el.classList.contains('btn-eq')){
                this.realizaConta()
            }
            this.display.focus()
            
        })
    }

    this.realizaConta = () => {
        let conta = this.display.value;
        try{
            conta = eval(conta);
            
            if(!conta){
            alert('Conta inválida')
            return
        }
        this.display.value = String(conta);
        }catch(e){
            alert('Conta inválida')
            return
        }


    }

    this.btnParaBotoes = (el) => this.display.value += el

    this.deletaUm = () => this.display.value = this.display.value.slice(0, -1)

}

const calculadora = new CriaCalculadora()
calculadora.inicia()
