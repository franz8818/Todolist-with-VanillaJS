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

//function nombreFuncion() { bloque de codigo }
function actualizaTarea() {
    console.log("hola");
}

// elemento.addEventListener ("tipo de evento", function)
inputTodo.addEventListener("change", actualizaTarea);