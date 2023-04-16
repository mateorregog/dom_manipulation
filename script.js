//Primer paso : seleccionar los elementos HTML
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')
const form = document.querySelector('#form')

//Después de seleccionarlos ponemos a la escucha los elementos susceptibles de cambio. Se agrega en el doc html las propiedades onclick para btn y onchange para input. Usar también addeventlistener
//Recibe dos arguemntos: el evento y la funcion a ajecutar.  La función se llama sin paréntesis!!
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    //Tomamos el valor del primer y segundo input y los convertimos en num para operarlos
    event.preventDefault(); //Evita que se recargue la pagina ya que se encuentra dentro de un form que por defecto recarga la pagina y envia los parametros x la url. Se puede evitar esto campiando el type del boton como button en el html ya que trae por defecto submit por estar dentro de un form y eso actualiza la pagina
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    const res = (num1+num2);
    result.innerText = "";
    result.innerText = res;
}