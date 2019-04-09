// MANIPULAR DOM
const btnCifrar=document.getElementById("cifrar-btn");
btnCifrar.addEventListener("click", ()=>{
	let numero=document.getElementById("clave").value;
	let texto=document.getElementById("mensaje").value;
	let resultado=cipher.encode(numero, texto);
	document.getElementById("mensaje").value=resultado;
})

const btnDescifrar=document.getElementById("descifrar-btn");
btnDescifrar.addEventListener("click", ()=>{
	let numeroD=document.getElementById("clave").value;
	let textoD=document.getElementById("mensaje").value;
	let resultadoD=cipher.decode(numeroD,textoD);
	document.getElementById("mensaje").value=resultadoD;
} )