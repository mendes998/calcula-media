function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)) {
        const media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);
        document.getElementById("notas").textContent = `${nota1}, ${nota2}, ${nota3}, ${nota4}`;
        document.getElementById("media").textContent = media;
    } else {
        alert("Preencha todas as notas corretamente.");
    }
}

function limparCampos() {
    document.getElementById("mediaForm").reset();
    document.getElementById("notas").textContent = "";
    document.getElementById("media").textContent = "";
}
