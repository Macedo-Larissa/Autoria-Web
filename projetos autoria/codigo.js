var precototal = 0, qtdprotudossim = 0, qtdprotudosnao = 0;
arrayatenderam = [];
arraynaoatenderam = [];

function cadastrarproduto() {
    var nomeproduto = "";
    var precoproduto = 0;
    nomeproduto = document.getElementById("produto").value;
    precoproduto = document.getElementById("preco").value;
    if (nomeproduto == "") {
        document.getElementById('produto').focus();
        arraynaoatenderam[qtdprotudosnao] = (nomeproduto) + ", R$ " + (precoproduto);
        qtdprotudosnao++;
        produtosnao.innerHTML = String(qtdprotudosnao);
    } else {
        if (precoproduto <= 0 || precoproduto == "") {
            document.getElementById('preco').focus();
            arraynaoatenderam[qtdprotudosnao] = (nomeproduto) + ", R$ " + (precoproduto);
            qtdprotudosnao++;
            produtosnao.innerHTML = String(qtdprotudosnao);
        } else {
            precototal = precototal + parseFloat(precoproduto)
            resultado.innerHTML = `${"Valor Total dos Produtos R$ " + String(precototal)}`;
            document.getElementById('produto').value = '';
            document.getElementById('preco').value = '';
            document.getElementById('produto').focus();
            arrayatenderam[qtdprotudossim] = (nomeproduto) + ", R$ " + (precoproduto);
            qtdprotudossim++;
            produtossim.innerHTML = String(qtdprotudossim);
        }
    }
}
function nomeprodutossim() {
    conteudo1.innerHTML = '';
    var s = 0;
    while (s <= (qtdprotudossim - 1)) {
        conteudo1.innerHTML = conteudo1.innerHTML + String(arrayatenderam[s]) + "<br>";
        s++;
    }
}
function nomeprodutosnao() {
    conteudo2.innerHTML = '';
    var n = 0;
    while (n <= (qtdprotudosnao - 1)) {
        conteudo2.innerHTML = conteudo2.innerHTML + String(arraynaoatenderam[n]) + "<br>";
        f++;
    }
}