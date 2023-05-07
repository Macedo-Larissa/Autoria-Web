var cadastro = [];
var posicaocadastro = 0, qtdgatos = 0, qtdcachorros = 0;


function registrar() {
    var nome = document.getElementById("nomepet").value;
    var idade = document.getElementById("idadepet").value;
    var tipo = document.getElementById("tipo").value;
    var cachorro = document.getElementById("cachorro").value;
    // var gato = document.getElementById("gato").value;

    if (nome != "" && nome != null) {
        if (parseInt(idade) > 0 && parseInt(idade) <= 30) {
            if (tipo == cachorro) {
                cadastro[qtdcachorros] = nome + ", " + idade;
                listacachorros.innerHTML = listacachorros.innerHTML + cadastro[qtdcachorros] + "<br>";
                qtdcachorros++;
            } else {
                cadastro[qtdgatos] = nome + ", " + idade;
                listagatos.innerHTML = listagatos.innerHTML + cadastro[qtdgatos] + "<br>";
                qtdgatos++;
            }

            divqtdgatos.innerHTML = `${qtdgatos}`;
            divqtdcachorros.innerHTML = `${qtdcachorros}`;

        } else {
            window.alert("ERRO: Corrija a idade do seu pet!")
        }
    } else {
        window.alert("ERRO: O nome do seu pet está em branco!")
    }
    document.getElementById('nomepet').value = '';
    document.getElementById('idadepet').value = '';
    document.getElementById('nomepet').focus();
}

function comparar() {
    if (qtdcachorros == 0 && qtdgatos == 0) {
        window.alert("ERRO: Não há nenhum animal registrado.")
    } else {
        if (qtdcachorros == 0) {
            window.alert("ERRO: Não há nenhum cachorro registrado.")
        } else if (qtdgatos == 0) {
            window.alert("ERRO: Não há nenhum gato registrado.")
        } else {
            if (qtdcachorros == qtdgatos) {
                divqtd.innerHTML = `${"A quantidade de gatos e a quantidade de cachorros registrados é igual."}`;
            } else if (qtdcachorros > qtdgatos) {
                divqtd.innerHTML = `${"A quantidade de cachorros é maior que a quantidade de gatos."}`;
            } else {
                divqtd.innerHTML = `${"A quantidade de gatos é maior que a quantidade de cachorros."}`;
            }
        }
    }
}
