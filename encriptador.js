
function Encriptar(){
    let texto= document.getElementById("texto").value;
    let resultado= "";
    let cambios=["nter","mes","i","ber","fat"]
    let letras=["e","i","a","o","u"];
    if(texto==""){
      return document.getElementById("resultado").value="No has escrito nada";
    }
    for (let i=0; i<texto.length; i++){
        if (letras.includes(texto[i])){
            resultado+=texto[i]+cambios[letras.indexOf(texto[i])];
        }else{
            resultado+=texto[i];
        }
      
    }
    document.getElementById("resultado").value = resultado;
}

function Desinciptar(){
    let texto= document.getElementById("texto").value;
    let resultado= "";
    let letras=["e","i","a","o","u"];
    if(texto==""){
      return  document.getElementById("resultado").value="No has escrito nada";
    }
    for (let i=0; i<texto.length; i++){
        if (letras.includes(texto[i])){
            resultado+=texto[i];
            i+=3;
        }else{
            resultado+=texto[i];
        }
      
    }

    document.getElementById("resultado").value = resultado;
}


async function Copiar() {
    try {
        Mensaje=document.getElementById("resultado").value;
        console.log(Mensaje);
      await navigator.clipboard.writeText(Mensaje);
      /* Resuelto - texto copiado al portapapeles con éxito */
      console.log('Contenido copiado al portapapeles');
      document.getElementById("texto").value='';
        /* Rechazado - fallo al copiar el texto al portapapeles */
    } catch (err) {
      console.error('Error al copiar: ', err);
    
    }
  }

