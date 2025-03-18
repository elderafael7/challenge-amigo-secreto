let listaAmigos = [];

function adicionarAmigo(){
    limparNomes('resultado')
    let amigo = document.querySelector('input').value;
    
    if(amigo === ''){
        alert('Insira um nome válido!');
    }else{
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        mostrarAmigoAdicionado("listaAmigos");
        limparCampo();
    }
}

function sortearAmigo(){
    limparNomes('listaAmigos');
    let tamanhoLista = listaAmigos.length - 1;
    let participante = parseInt(Math.random() * tamanhoLista + 1);
    let participanteNome = ("O amigo sorteado é " + listaAmigos[participante]);

    if(tamanhoLista == 0){
        participanteNome = ("O amigo sorteado é " + listaAmigos[0]);
        mostrarAmigoSorteado("resultado", participanteNome);
        listaAmigos = [];
    }else{
        if(tamanhoLista == -1){
            limparNomes('resultado');
            alert('A LISTA ESTÁ VAZIA!');
        }else{
            console.log(tamanhoLista);
            console.log(participante);
            console.log(listaAmigos[participante]);
            listaAmigos.splice(participante, 1);
            console.log(listaAmigos);
            mostrarAmigoSorteado("resultado", participanteNome);
            limparCampo();
        }
    }
}

function mostrarAmigoAdicionado(id){
    const ul = document.getElementById(id);
    ul.innerHTML = '';
    
    listaAmigos.forEach((listaAmigo) => {
        const li = document.createElement('li');
        li.textContent = listaAmigo;
        ul.appendChild(li);
    });
 
}


function mostrarAmigoSorteado(id, texto){  
    const ul = document.getElementById(id);
    ul.innerHTML = texto;
}

function limparNomes(id){
    const ul = document.getElementById(id);
    ul.innerHTML = '';

}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}