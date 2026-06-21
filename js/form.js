const form = document.getElementById("formAgrolab");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const nombre = document.getElementById("nombre").value.trim();
const correo = document.getElementById("correo").value.trim();
const telefono = document.getElementById("telefono").value.trim();
const ciudad = document.getElementById("ciudad").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();

if(
nombre === "" ||
correo === "" ||
telefono === "" ||
ciudad === "" ||
mensaje === ""
){
alert("Por favor complete todos los campos.");
return;
}

alert("Inscripción enviada correctamente.");

form.reset();

});

}