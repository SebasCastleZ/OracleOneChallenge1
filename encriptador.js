
function Encriptar(){
    let texto= document.getElementById("texto").value;
    let resultado= "";
    for (let i=0; i<texto.length; i++){
        let codigo= texto.charCodeAt(i);
        resultado+= String.fromCharCode(codigo+1);
    }
    document.getElementById("resultado").value = resultado;
}

