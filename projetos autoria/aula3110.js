function validaridade(){
    var opcao = window.prompt("Validar: Idade - I; Altura - H; Todos - T");
    if (opcao == "I" || opcao == "i"){
        var idade = parseInt(window.prompt("Informe a Idade da Pessoa"));
        if (idade > 0 && idade <= 120) {
            window.alert("A idade é válida")
            divmensagem.innerHTML = String("A informação de idade "+idade+" é válida");
        } else {
            window.alert("A idade não é válida");
        }
    } else{
        if (opcao == "H" || opcao == "h"){
            var altura = parseFloat(window.prompt("Informe a altura da pessoa"))
            if (altura >= 1.20 && altura <= 2.30) {
                window.alert("A altura é válida")
                divmensagem.innerHTML = String("A informação de altura "+altura+" é válida");
            } else{
                window.alert("A altura não é válida");
            }
        } else { 
            if (opcao == "T" || opcao == "t"){
                var idade = parseInt(window.prompt("Informe a Idade da Pessoa"));
                if (idade > 0 && idade <= 120) {
                    window.alert("A idade é válida")
                } else {
                    window.alert("A idade não é válida");
                }
                var altura = parseFloat(window.prompt("Informe a altura da pessoa"))
                if (altura >= 1.20 && altura <= 2.30) {
                    window.alert("A altura é válida")
                } else{
                    window.alert("A altura não é válida");
                }
                divmensagem.innerHTML = String("As informações de idade "+idade+" e altura "+altura+" são válidas");
            } else {
                divmensagem.innerHTML = String("Nenhuma informação validada"); 
            }  
        }
    }    
}