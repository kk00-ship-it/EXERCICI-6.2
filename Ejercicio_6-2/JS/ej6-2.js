function CalculoLetras() {

    let frase = document.getElementById("frase").value;
    
    
    const Array_frase = frase.split("");

    let calculo = 0;

    for(let i = 0; i < Array_frase.length; i++){
     
      if(Array_frase[i] == "a" || Array_frase[i] == "A"){
        calculo++;        
      }
    
    } 

    document.getElementById("output").innerHTML = `La frase tiene ${calculo} letras a`;

}
 
