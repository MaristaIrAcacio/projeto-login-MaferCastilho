function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    
    if(!email || !senha){
        alert("Campos de preenchimento obrigatório. Favor preecher");
    }else{
        window.location.href = "aula2.html";
    }
}
    // CRIA LISTA DE USUÁRIO DENTRO DE UM ARRAY
    var dadosLista = [];

    function salvarUser(){
        let nomeUser = document.getElementById("nomeUser").value;

        if(nomeUser){
            dadosLista.push(nomeUser);
            criaLista();
            document.getElementById("nomeUser").value = '';
        }else{
            alert("Usuário por favor preencher o campo nome");
        }
    }
    // FUNÇÃO PARA CRIAÇÃO DE LISTA NA TABELA
    function criaLista(){
        let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

        // LAÇO DE REPETIÇÃO PARA COLOCAR NOMES NA TABELA
        for(let i=0;i <= (dadosLista.length-1);i++){
            tabela += "<tr><td>"  + dadosLista[i] + "</td><td><button class='btn btn-success' onclick=''>Editar</button><button class='btn btn-danger' onclick=''>Excluir</button></td></tr>";
            document.getElementById("tabela").innerHTML = tabela;
        }
    } 


