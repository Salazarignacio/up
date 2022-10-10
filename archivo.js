/* seleccion del boton */

const display = document.querySelector("#change");

/* get de contenedores */

const cont1 = document.getElementById("display")
const cont2 = document.getElementById("display2")

/* cambiar lado A / lado B */

const cambiarClase = () => {
    if (acumulado.length > 0) {
        cont1.classList.toggle("display");
        cont2.classList.toggle("display");
    }

}

/* get parrafo */

const parrafo = document.getElementById("par")
const numeroId = document.getElementById("numeroId")

/* render numeros */

let acumulado = []
let arr = [1, 2, 3, 4, 5]

function render() {
    let i = 1;
    for (let a of arr) {
        let div = document.createElement("li");
        div.classList.add("numeros");
        div.classList.add("hym");
        div.classList.add(`class-${i++}`);
        div.innerHTML = `${a}`;
        numeroId.append(div)
    }
}

render();

/* get de numeros (tal vez podria generarse con un bucle) */

const uno = document.querySelector(".class-1")
const dos = document.querySelector(".class-2")
const tres = document.querySelector(".class-3")
const cuatro = document.querySelector(".class-4")
const cinco = document.querySelector(".class-5")


/* cambiar background numeros */

function cambiarBack() {
    uno.classList.toggle("activo");
}

/* funciones para cada boton */

let cambios = document.createElement("div")

function numeroUno() {
    uno.classList.add("activo");
    dos.classList.remove("activo");
    tres.classList.remove("activo");
    cuatro.classList.remove("activo");
    cinco.classList.remove("activo");
    acumulado.shift();
    acumulado.push(arr[0])
    cambios.innerHTML = `You selected ${acumulado[0]} out of ${arr.length}`;
    parrafo.appendChild(cambios);
    console.log(acumulado)
}

const numeroDos = () => {
    uno.classList.remove("activo");
    dos.classList.toggle("activo");
    tres.classList.remove("activo");
    cuatro.classList.remove("activo");
    cinco.classList.remove("activo");
    acumulado.shift();
    acumulado.push(arr[1])
    cambios.innerHTML = `You selected ${acumulado[0]} out of ${arr.length}`;
    parrafo.append(cambios);
    console.log(acumulado)
}
const numeroTres = () => {
    uno.classList.remove("activo");
    dos.classList.remove("activo");
    tres.classList.toggle("activo");
    cuatro.classList.remove("activo");
    cinco.classList.remove("activo");
    acumulado.shift();
    acumulado.push(arr[2])
    cambios.innerHTML = `You selected ${acumulado[0]} out of ${arr.length}`;
    parrafo.append(cambios);
    console.log(acumulado)
}
const numeroCuatro = () => {
    uno.classList.remove("activo");
    dos.classList.remove("activo");
    tres.classList.remove("activo");
    cuatro.classList.toggle("activo");
    cinco.classList.remove("activo");
    acumulado.shift();
    acumulado.push(arr[3])
    cambios.innerHTML = `You selected ${acumulado[0]} out of ${arr.length}`;
    parrafo.append(cambios);
    console.log(acumulado)
}
const numeroCinco = () => {
    uno.classList.remove("activo");
    dos.classList.remove("activo");
    tres.classList.remove("activo");
    cuatro.classList.remove("activo");
    cinco.classList.toggle("activo");
    acumulado.shift();
    acumulado.push(arr[4])
    cambios.innerHTML = `You selected ${acumulado[0]} out of ${arr.length}`;
    parrafo.append(cambios);
    console.log(acumulado)
}

uno.onclick = numeroUno;
dos.onclick = numeroDos;
tres.onclick = numeroTres;
cuatro.onclick = numeroCuatro;
cinco.onclick = numeroCinco;

/* Para dar un mejor dinamismo al codigo hubiera sido preferible crear una 
funcion unica con parametros y pasar el numero correspondiente a cada boton

ejemplo:

function unica (p){
    acumulado.shift();
    acumulado.push(arr[p])
    cambios.innerHTML = `<p>You selected ${acumulado[0]} of ${arr.length}</p>`;
}

uno.onclick = unica(1);

pero para mi sorpesa si se declaran los parentesis luego de la funcion, esta
misma se ejecuta al renderizar la pagina y no en el evento "click".
*/

display.addEventListener("click", cambiarClase);