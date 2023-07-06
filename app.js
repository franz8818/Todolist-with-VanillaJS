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
//Un parámetro es un valor dinámico ->  función (parámetro) -> (evento)
function actualizaTarea(evento) {
    //consola(parámetro.objetivo.valor de lo que el usuario escribe -> propiedad del TARGET)
    console.log(evento.target.value);
}

// elemento.addEventListener ("tipo de evento", (parámetro) arrowfunction function(parámetro))
inputTodo.addEventListener("change", (event) => actualizaTarea(event))