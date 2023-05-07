const form   = document.getElementById('form');
const campos = document.querySelectorAll(".required");
const spans  = document.querySelectorAll(".span-required");
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        console.log("NOME DEVE TER NO MÍNIMO 3 CARACTERES.");
    }
    else
    {
        console.log("NOME VALIDADO");
    }
}