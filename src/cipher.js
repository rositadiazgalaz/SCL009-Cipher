// DEFINITIVO 

window.cipher = {
  encode: (numero,texto) => {
    /* declara variables */
    let textoCipher="";
    let textASCII=0;
    let asciiCode=0;
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
  		// caracteres especiales
  		if (textASCII_decode>=32 && textASCII_decode<=64) {
        // para descrifrar parte con el tope al final por eso 64
        asciiCode_decode=(textASCII_decode-64-numClave_decode)%33+64;
        textoCipher_decode+=String.fromCharCode(asciiCode_decode);
        
      }
      // en el rango de las mayusculas de 65 a 90
      else if (textASCII_decode>=65 && textASCII_decode <=90) {
        // para descifrar el tope esta en 90
        asciiCode_decode=(textASCII_decode-90-numClave_decode)%26+90;
        textoCipher_decode+=String.fromCharCode(asciiCode_decode);
      }
      // rango de minusculas 97 a 122
      else if(textASCII_decode>=97 && textASCII_decode<122){
        asciiCode_decode=(textASCII_decode-122-numClave_decode)%26+122;
        textoCipher_decode+=String.fromCharCode(asciiCode_decode);
      }


    }
    return textoCipher_decode;
    /* Acá va tu código */
  }
};
