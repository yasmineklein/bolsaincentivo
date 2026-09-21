function calcularProjetoIncentivo() {
    let inputElement = document.getElementById("descontoCursoTodo");
    let avisoElement = document.getElementById("avisoNoventa"); // Essa é a linha que estava faltando!
    let valorDigitado = inputElement.value;

    
    valorDigitado = valorDigitado.replace(/[^\d.,]/g, '');
    
    valorDigitado = valorDigitado.replace('.', ',');

    const partes = valorDigitado.split(',');
    if (partes.length > 2) {
        valorDigitado = partes[0] + ',' + partes.slice(1).join('');
    }

    let valorNumerico = parseFloat(valorDigitado.replace(',', '.'));
    if (valorNumerico > 100) {
        valorDigitado = "100"; 
        valorNumerico = 100;
    }

    inputElement.value = valorDigitado;

    if (avisoElement) {
        if (valorNumerico > 90) {
            avisoElement.style.display = "block"; 
        } else {
            avisoElement.style.display = "none";  
        }
    }

    if (valorDigitado === "" || isNaN(valorNumerico)) {
        document.getElementById("bolsaIncondicional").value = "";
        document.getElementById("bolsaIncentivo").value = "";
        if (avisoElement) avisoElement.style.display = "none";
        return;
    }

    const c3 = valorNumerico / 100;

    let c5 = c3 - 0.10;
    if (c5 < 0) {
        c5 = 0; 
    }

    const bolsaIncentivo = 1 - ((100 * (1 - c3)) / (100 * (1 - c5)));

    document.getElementById("bolsaIncondicional").value = (c5 * 100).toFixed(2).replace('.', ',') + "%";
    document.getElementById("bolsaIncentivo").value = (bolsaIncentivo * 100).toFixed(2).replace('.', ',') + "%";
}

function limparCampos() {
    document.getElementById("descontoCursoTodo").value = "";
    document.getElementById("bolsaIncondicional").value = "";
    document.getElementById("bolsaIncentivo").value = "";
    
    let avisoElement = document.getElementById("avisoNoventa");
    if (avisoElement) avisoElement.style.display = "none";
}
