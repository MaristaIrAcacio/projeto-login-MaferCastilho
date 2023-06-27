/*
Código de validação de formulário de login
*/
function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    
// || !cpf || !rua || !numero || !cep || cidade || !bairro || !estado || !complemento

    if(!email || !senha){
        alert("Campos de preenchimento obrigatório. Favor preecher");
    }else{
        alert("Campos preechidos com sucesso!");
    }
}