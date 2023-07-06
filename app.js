//document.getElementId -> Obten elemento por id
//El input
const inputTodo = document.getElementById("todo");
console.log(inputTodo);
//El boton
const botonAgregar = document.getElementsByName("agregar");
console.log(botonAgregar);
//La lista de tareas
const listaTareasDom = document.getElementsByName("todo-list");
console.log(listaTareasDom);

//variable inmutable nuevaTarea = "string vacio -> para que agrege el valor del usuario";
let nuevaTarea = "";
let listaTareas = []; //arreglo vacio -> "lista de cosas"

//function nombreFuncion() { bloque de codigo }
//Un parámetro es un valor dinámico ->  función (parámetro) -> (evento)
function actualizaTarea(evento) {
    //Permite asignarle a la nueva al STRING vacio un nuevo valor (lo que el usuario vaya escribiendo) 
    nuevaTarea = evento.target.value
    console.log(nuevaTarea);
}
//Se crea función para ver si esta funcionado.
function agregarTarea() {
    console.log("Hola Franz");
}

// elemento.addEventListener ("tipo de evento", (parámetro) arrowfunction function(parámetro))
inputTodo.addEventListener("change", (event) => actualizaTarea(event));

//elemento.addEventListener ("usuario hace click con el mouse", (parámetro) arrowfunction function(parámetro))
botonAgregar.addEventListener("click", agregarTarea);