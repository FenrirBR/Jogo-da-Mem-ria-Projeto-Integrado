const cartas = document.querySelectorAll(".carta");
let cartaVirada = false;
let primeiraCarta, segundaCarta;
let primeiraVirada = false;
let segundaVirada = false;
let botaoEmbaralhar = document.getElementById("BotaoEmbaralhar");
jaAcertou = false;


function adicionaEventos(){
    cartas.forEach(cartas => {
           
        if(cartas.classList.contains("travada")){
            cartas.removeEventListener("click", viraCarta);
            console.log("ja virei");
        }else{
            cartas.addEventListener('click', viraCarta);
        }
    })
}
adicionaEventos();



function removeEventos(){
    cartas.forEach(cartas=> cartas.removeEventListener("click",viraCarta));
}


function viraCarta(){
        if(primeiraVirada == false){
            console.log("virei UMA!");
            primeiraCarta = this;
            primeiraCarta.removeEventListener("click", viraCarta);
            primeiraCarta.classList.toggle("anima");
            
            primeiraVirada = true;
    }else if(primeiraVirada == true){
            segundaCarta = this;
            removeEventos();
            segundaVirada = true;
            console.log("virei DUAS!");
            segundaCarta.removeEventListener("click", viraCarta);
            segundaCarta.classList.toggle("anima");
            comparaCarta();
        }
}
function comparaCarta(){
        if(primeiraCarta.dataset.pokemon == segundaCarta.dataset.pokemon){
            console.log("você acertou!");
            primeiraVirada = false;
            segundaVirada= false;
            primeiraCarta.classList.toggle("travada");
            segundaCarta.classList.toggle("travada");
            adicionaEventos();
        }else{
            console.log("você errou!!!");
            primeiraVirada = false;
            segundaVirada= false;
            tempo();
            
        }
    }
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function tempo() {
        console.log("Waiting 2 seconds...");
        await delay(2000);
        adicionaEventos();
        primeiraCarta.classList.toggle("anima");
        segundaCarta.classList.toggle("anima");
    }
 
    function embaralhaTudo(){

        primeiraCarta = null;
        segundaCarta = null;
        cartas.forEach(carta => {
            let ramdomPos = Math.floor(Math.random() * 12);
            carta.style.order = ramdomPos;
            
          });

          console.log("embaralhei!!!");
       
      }
