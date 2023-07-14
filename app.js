//document.getElementId -> Obten elemento por id
//El input
const inputTodo = document.getElementById("todo");
console.log(inputTodo);
//El boton
const botonAgregar = document.getElementById("agregar");
console.log(botonAgregar);
//La lista de tareas
const listaTareasDom = document.getElementById("todo-list");
console.log(listaTareasDom);

//variable inmutable nuevaTarea = "string vacio -> para que agrege el valor del usuario";
let nuevaTarea = "";
let listaTareas = []; //arreglo vacio -> "lista de cosas"

//function nombreFuncion() { bloque de codigo }
//Un parámetro es un valor dinámico ->  función (parámetro) -> (evento)
function actualizaTarea(evento) {
    //Permite asignarle a la nueva al STRING vacio un nuevo valor (lo que el usuario vaya escribiendo) 
    nuevaTarea = evento.target.value
    // console.log(nuevaTarea);
}
//Se crea función para ver si esta funcionado.
function agregarTareaLista() {
    listaTareas.push(nuevaTarea); //Cuando el usuario le de "click" a esta función, me agregue esta una nueva tarea a mi lista de tareas.
    //Para lograr eso -> usar el método "push" -> Permite agregar un nuevo elemento a un array.
    //Falta que se agregue al DOM para que se refleje la interfaz de usuario. -> Porque solo se obtiene info del DOM hacia JS.
    //Para envíar(empujar) información de JS hacia el DOM. -> Para que "imprima la lista".
    listaTareasDom.innerHTML = ""; //Elemento de HTML -> Mediante el "innerHTML" limpio lo que esta previamente, cuando el ususario agregue una nueva tarea. -> Remplaza todo el HTML por un elemento vacío.
    //"forEach" -> Método de los arrays que nos permite recorrer(iterar) cada elemento(lista = array).
    //Por cada elemento estoy imprimiendo el valor de ese elemento y estoy imprimiendo el "indice" de ese elemento.
    listaTareas.forEach((tarea, indice) => {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.innerText = tarea;
        console.log(tarea);
        listaTareasDom.appendChild(nuevoElemento)
    });
}

// elemento.addEventListener ("tipo de evento", (parámetro) arrowfunction function(parámetro))
inputTodo.addEventListener("change", (event) => actualizaTarea(event));

//elemento.addEventListener ("evento -> usuario hace click con el mouse", (parámetro) arrowfunction function(parámetro))
//Se debe agregar el evento -> "click" y la función -> "agregarTareaLista()"
botonAgregar.addEventListener("click", agregarTareaLista);