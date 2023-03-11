//DOM, ligando o javascript aos elementos da pagina
let hora=document.getElementsByClassName('valorh')[0]
let minuto=document.getElementsByClassName('valorm')[0]
let segundo=document.getElementsByClassName('valors')[0]
let msg=document.getElementsByClassName('msg')[0]
let positividade=document.getElementsByClassName('positividade')[0]
let corpo=document.querySelector('body')

// funçao setInterval para captar as horas
const relogio = setInterval(function (){

let dateToday = new Date();
let hr = dateToday.getHours(); // captaçao de hora
let min= dateToday.getMinutes(); // captaçao de minutos
let sec= dateToday.getSeconds(); // captaçao de segundos

if(hr<10){hr= "0"+hr;} // acrescentando o 0 na frente das horas por questoes esteticas
if(min<10){min="0"+min}//acrescentando o 0 na frente dos minutos por questoes esteticas
if(sec<10){sec= "0"+sec}// acrescentando o 0 na frente dos segundos por questoes esteticas

// estrutura de condiçao para desejar bom dia, ligada ao h1 da pagina html
if(hr>=6 && hr<12){
msg.innerHTML = "Bom dia!" 
}else if(hr>=12 && hr<18){
    msg.innerHTML="Boa Tarde!"
    msg.style.color='azure'
}
else{msg.innerHTML="Boa noite!"      
msg.style.color='azure'
}

// estrutura de condiçao para desejar uma mensagem de positividade ao usuario, ligada ao h2 da pagina html
if(hr>=6 && hr<12){
    positividade.innerHTML = "Que sua manha seja repleta de coisas boas"
    
    } 
     else if(hr>=12 && hr<18){
        positividade.innerHTML= "Que sua tarde seja repleta de boas energias!"
        positividade.style.color='azure'
    }

    else{positividade.innerHTML= "Seja tranquila ou agita, mas que sua noite seja inesquecivel!" 
    positividade.style.color='azure'
}

//passando os valores da hora da variavel para o texto html para ser exibido na tela
hora.textContent = hr;
minuto.textContent= min;
segundo.textContent = sec;


// estrutura de repetiçao para trocar a imagem de background do site.
if(hr>=6 && hr<12){
    //manha

corpo.style.background='url(./imagens/cafemanha.jpg)'
corpo.style.backgroundSize='cover'
corpo.style.backgroundPositionX ='-1200px'
corpo.style.backgroundPositionY ='-500px'
corpo.style.backgroundPosition='center center'
   
    
    } else if(hr>=12 && hr<18){
        //tarde
        
        corpo.style.background='url(./imagens/afternoon.jpg)'
        corpo.style.backgroundSize='cover'
        corpo.style.backgroundPositionX ='-1200px'
        corpo.style.backgroundPositionY ='-500px'
        corpo.style.backgroundPosition='center center'

    }
    
    else{
        //noite
        corpo.style.background='url(./imagens/night.jpg)'
        corpo.style.backgroundSize='cover'
        corpo.style.backgroundPosition='center center'
        corpo.style.backgroundRepeat='no-repeat'
    }


}


)


