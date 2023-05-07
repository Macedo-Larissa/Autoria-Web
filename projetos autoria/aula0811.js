//window.alert ("Olá, seja bem vindo ao nosso site!");

var totalproduto = 0;
function cadastrarproduto(){
    var nomeproduto = "";
    var precoproduto = 0;
    nomeproduto = document.getElementById("produto").value;
    precoproduto = document.getElementById("preco").value;
    if (nomeproduto == ""){
        window.alert("Problema com o nomes do produto");
        document.getElementById('produto').focus();
    } else {
        if (precoproduto <= 0 || precoproduto == ""){
            window.alert("Problema com o preço do produto");
            document.getElementById('preco').focus(); 
        } else {
            totalproduto = totalproduto + parseFloat(precoproduto)
            divinfoprodutos.innerHTML = `${nomeproduto + " custa R$ " + precoproduto}`;
            divinfototalprodutos.innerHTML = `${"Valor Total dos Produtos R$ " + String(totalproduto)}`;
            document.getElementById('produto').value=''
            document.getElementById('preco').value=''
            document.getElementById('produto').focus();
        }
    }   
}