function calcularProjetoIncentivo() {
    // 1. Captura o valor de C3 (Desconto Curso Todo)
    const inputDesconto = document.getElementById("descontoCursoTodo").value;
    
    // Substitui vírgula por ponto e divide por 100 para trabalhar com decimais (ex: 76,08 vira 0.7608)
    const c3 = parseFloat(inputDesconto.replace(',', '.')) / 100;

    // Validação para garantir que o input é um número válido
    if (isNaN(c3) || inputDesconto === "") {
        console.warn("Por favor, insira um valor numérico válido.");
        return;
    }

    // 2. Calcula C5: Bolsa CD - Incondicional (Valor do desconto total - 10pp)
    let c5 = c3 - 0.10;

    
    if (c5 < 0) {
        c5 = 0; 
    }

    // 3. Aplica a fórmula da Bolsa Incentivo
    // Fórmula original do Excel: =1-((100*(1-C3))/(100*(1-C5)))
    const bolsaIncentivo = 1 - ((100 * (1 - c3)) / (100 * (1 - c5)));

    // 4. Formata e exibe os resultados na tela (multiplicando por 100 para voltar a ser porcentagem)
    document.getElementById("bolsaIncondicional").value = (c5 * 100).toFixed(2) + "%";
    document.getElementById("bolsaIncentivo").value = (bolsaIncentivo * 100).toFixed(2) + "%";
}
