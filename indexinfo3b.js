var totalpreco = 0, totalprodutos = 0, totalprodutosnao = 0; atendem = [], naoatendem = []; x = 0, y = 0;
function cadastrarproduto() {
    var nomeproduto = "";
    var precoproduto = 0;
    vna.innerHTML = "";
    nomeproduto = document.getElementById("produto").value;
    precoproduto = document.getElementById("preco").value;
    if (nomeproduto == "") {
        document.getElementById("produto").value = "";
        totalprodutosnao = totalprodutosnao + 1;
        naoatendem [y] = (nomeproduto) +  "R$" + (precoproduto);
        y++;
        naoatendemreq.innerHTML = String(totalprodutosnao);
        vna.innerHTML = "Nome do produto está invalido";
    }
    else if (precoproduto == "" || precoproduto <= 0) {
        document.getElementById("preco").value = "";
        naoatendem [y] = (nomeproduto) + "R$" + (precoproduto);
        y++;
        totalprodutosnao = totalprodutosnao + 1;
        naoatendemreq.innerHTML = String(totalprodutosnao);
        vna.innerHTML = "Digite um valor valido para o preço";
    }
    else {
        totalprodutos = totalprodutos + 1;
        totalpreco = totalpreco + parseFloat(precoproduto);
        resultado.innerHTML = String(totalpreco);
        atendemreq.innerHTML = String(totalprodutos);
        atendem [x] = (nomeproduto) + "R$" + (precoproduto);
        x++;
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('produto').focus();
    }
}
function atender(){
    atendemreq2.innerHTML = "";
    var j = 0;
    while (j <= (x - 1)) {
        atendemreq2.innerHTML = atendemreq2.innerHTML + String(atendem[j]) + "<br>";
        j++;
    }
}
function naoatender() {
    naoatendemreq2.innerHTML = "";
    var k = 0;
    while (k <= (y - 1)) {
        naoatendemreq2.innerHTML = naoatendemreq2.innerHTML + String(naoatendem[k]) + "<br>";
        k++;
    }
}
