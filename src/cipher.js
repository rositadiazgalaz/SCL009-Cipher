// DEFINITIVO 

window.cipher = {
  encode: (numero,texto) => {
    /* declara variables */
    let textoCipher="";
    let textASCII;
    let asciiCode;
    let numClave= parseInt(numero);

    for (let i=0; i<texto.length; i++){
    	// charCodeAt() es un metodo que devuelve un valor Unicode
    	// del caracter en el indice proporcionado 
    	textASCII=texto.charCodeAt(i);
    	// pasa por el rango de cracteres especiales entre 32 y 64
    	if (textASCII>=32 && textASCII<=64) {
    		// aplicando formula michille en rango de caracter especiales
    		asciiCode=(textASCII-32+numClave)%33+32;
    		// fromCharCode()crea cadena con valores unicode
    		textoCipher+=String.fromCharCode(asciiCode);

    	}
    	// en el rango de las mayusculas 
    	else if (textASCII>=65 && textASCII<=90) {
    		asciiCode=(textASCII-65+numClave)%26+65;
    		textoCipher+= String.fromCharCode(asciiCode);
    	}
    	// rango en minuscula 97 a 122
    	else if (textASCII>=97 && textASCII <=122) {
    		asciiCode=(textASCII-97+numClave)%26+97;
    		textoCipher+=String.fromCharCode(asciiCode);
    	}


    }
    return textoCipher;
    
  },
  decode: (numeroD, textoD) => {
  	let textoCipher_decode="";
  	let textASCII_decode=0;
  	let asciiCode_decode=0;
  	let numClave_decode=parseInt(numeroD);

  	for(let i=0; i<textoD.length; i++){
  		textASCII_decode=textoD.charCodeAt(i);


  	}
    /* Acá va tu código */
  }
};
