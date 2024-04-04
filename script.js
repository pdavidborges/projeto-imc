function calcularIMC(){
    //alert('ok');
    //const -> Constante
    //let -> Variável que não permite redeclaração 
    //e fica acessível somente ao escopo que foi criada
    
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let resultado = document.querySelector('#result');

    if(peso != '' && altura != ''){

        let imc = peso / (altura*altura);
        //alert(imc.toFixed(1));
        //escrevendo um conteúdo HTML 
        resultado.innerHTML = `<h3>Seu IMC é ${imc.toFixed(1)}</h3>`;
    }
    
    else{
        alert('Preencha todos os campos!');
    }

}

