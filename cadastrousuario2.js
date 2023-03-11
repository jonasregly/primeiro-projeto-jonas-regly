

var n=document.getElementsByClassName('nome')[0]
var h1=document.querySelectorAll("input[name='sexo']")
var m=document.getElementsByClassName('mulher')[0]
var o=document.getElementsByClassName('outros')[0]
var d=document.getElementsByClassName('ddd')[0]
var t=document.getElementsByClassName('numtel')[0]
var ru=document.getElementsByClassName('rua')[0]
var nr=document.getElementsByClassName('numerores')[0]
var c=document.getElementsByClassName('complemento')[0]
var b=document.getElementsByClassName('bairro')[0]
var cid=document.getElementsByClassName('cidade')[0]
var e=document.getElementsByClassName('estado')[0]
var ce=document.getElementsByClassName('cep')[0]
var form=document.getElementsByClassName('container')[0]








function verificar(){
    var nome=n.value
    var homem=h1.value
    var mulher=m.value
    var outros=o.value
    var ddd=Number(d.value)
    var numtel=t.value
    var numerores=nr.value
    var complemento=c.value
    var bairro=b.value
    var cidade=cid.value
    var estado=e.value
    var cep=ce.value
    var rua=ru.value


    
if(nome==''||nome.length<3){

window.alert("O campo deve conter pelo menos 2 letras")

}else if( ddd>100 ||ddd<10 ){

 alert("O DDD está errado!")   
} else if(  numtel.length!=9){

window.alert("O telefone deve conter 9 digitos")

}else if(rua==''){

alert("O campo rua nao pode ficar vazio")

}else if(numerores==''){

alert('O numero da casa nao pode ficar fazio')

}else if(bairro==''){

    alert('O campo Bairro nao pode ficar vazio')

}else if(cidade==''){

    alert('O campo Cidade nao pode ficar vazio')

}else if(estado==''){

alert('O campo Estado nao pode ficar vazio')

}else if( cep.length!=9){

alert('O campo CEP deve ser preechido com 8 numeros e o digito')

}else{

    form.submit();
    
}






}


