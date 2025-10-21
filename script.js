const respuestasCorrectas=["V","F","V","F","V","F","F","V","F","V"];
const botonVerificar=document.getElementById("verificar");
const barra=document.querySelector(".marcador__barra");
const puntajeTexto=document.querySelector(".marcador__puntaje");
const mensaje=document.querySelector(".resultado__mensaje");
const preguntas=document.querySelectorAll(".pregunta");
const botonVolver=document.getElementById("volver");
preguntas.forEach(pregunta=>{
pregunta.addEventListener("click",()=>{
preguntas.forEach(item=>item.classList.remove("activa"));
pregunta.classList.add("activa");
});
pregunta.querySelectorAll("input").forEach(input=>{
input.addEventListener("change",()=>{
preguntas.forEach(item=>item.classList.remove("activa"));
pregunta.classList.add("activa");
});
});
});
botonVerificar.addEventListener("click",()=>{
let puntaje=0;
let incompletas=[];
preguntas.forEach((pregunta,indice)=>{
const elegido=pregunta.querySelector("input:checked");
if(!elegido){
incompletas.push(indice+1);
return;
}
if(elegido.value===respuestasCorrectas[indice]){
puntaje+=1;
}
});
if(incompletas.length>0){
mensaje.style.display="block";
mensaje.textContent=`Te falta marcar: ${incompletas.join(", ")}`;
barra.style.width="0%";
puntajeTexto.textContent="0/10";
return;
}
const porcentaje=(puntaje/respuestasCorrectas.length)*100;
barra.style.width=`${porcentaje}%`;
puntajeTexto.textContent=`${puntaje}/10`;
mensaje.textContent=`Tu puntaje final: ${puntaje}/10`;
mensaje.style.display="block";
});
const actualizarBotonVolver=()=>{
if(window.scrollY>400){
botonVolver.classList.add("visible");
}else{
botonVolver.classList.remove("visible");
}
};
botonVolver.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});
window.addEventListener("scroll",actualizarBotonVolver);
actualizarBotonVolver();

