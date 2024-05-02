//var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/').then(resposta => resposta.json()).then(r => {
//  if(r.erro){
//      throw Error('Esse cep não existe');
//  } else
//console.log(r);
//}).finally(mensagem => console.log('Processamento concluído!'));

//console.log(consultaCEP);


async function buscarEdereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    try{
    var consultarCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultarCEPConvertido = await consultarCEP.json();
    if(consultarCEPConvertido.erro){
        throw Error('CEP não existente!');
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consultarCEPConvertido.localidade;
    logradouro.value = consultarCEPConvertido.logradouro;
    estadu.value = consultarCEPConvertido.uf;

    console.log(consultarCEPConvertido);
    return consultarCEPConvertido;
    } catch (erro){
        mensagemErro.innerHTML = `<p>CEP invalido, tente novamente</p>`;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscarEdereco(cep.value));