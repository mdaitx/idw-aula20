function alo(){
    alert('Alo!')
};

function aloNome(nome){
    alert('Alo '+ nome )
    alert(`Alo${nome}. Seja bem vindo ao curso!`)
};

function saudacao(){
    const nome = document.getElementById('nome').value

    if( nome===''){
        alert('Digite um nome valido')
        document.getElementById('nome').focus() //foco no elemento
    }else{
        alert (`${nome} Seja bem vindo ao curso. `)
    }
};

function mouseCima(){
    alert('O mouse esta aqui')
};

function mouseFora (){
    alert('O mouse saiu!')
};

function textoMudou(){
    alert('O texto mudou')
};

function emFoco(){
    const user = document.getElementById('user')
    user.style.border = '5px solid green'
    user.style.backgroundColor ='grey'  
} 

function semFoco(){
    const user = document.getElementById('user')
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'white' 
};