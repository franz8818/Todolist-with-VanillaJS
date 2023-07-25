# To-do list vanilla Js 🤓
Se creo una lista de tareas con VanillaJS. Utilizamos el DOM y a creamos elementos HTML con JavaScript.

## indice

- [Sobre el proyecto](#sobre-el-proyecto)
- [Requisitos](#requisitos)
- [Estructura de archivos](#estructura-de-archivos)
- [index.html](#index.html)
- [styles.css](#styles.css)
- [main.js](#main.js)
  - [Puntos clave de Javascript](#puntos-clave-de-javascript)

## Sobre el proyecto

El proyecto que vamos a realizar consiste en crear una lista de tareas con JavaScript vanilla. En este proyecto vamos a aprender a utilizar el DOM y a crear elementos HTML con JavaScript.

## Requisitos

Mientras no es necesario tener conocimientos previos de HTML, CSS y JavaScript, si es recomendado tener algun tipo de fundamentos de la programación.

- Tener un editor de código instalado, en este caso vamos a utilizar Visual Studio Code.

  > [Descarga Visual Studio Code](https://code.visualstudio.com/)

- Tener instalado el plugin de Live Server en Visual Studio Code.

  > [Descarga Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

- Crear una cuenta en fontawesome para poder utilizar sus iconos.
  > [Crea una cuenta en fontawesome](https://fontawesome.com/)

## Estructura de archivos

- Crear una carpeta con el nombre del proyecto.

- Crear un archivo index.html, styles.css y main.js

## index.html

Dentro del archivo HTML vamos a crear la estructura base que despues vamos a modificar usando javascript.

> ⚠ Debemos incluir dentro del archivo index.html la conexión con el archivo main.js y styles.css ⚠

## styles.css

Dentro del archivo CSS vamos a crear los estilos que vamos a utilizar en el proyecto.

## main.js

Dentro del archivo JavaScript vamos a crear las funciones que vamos a utilizar en el proyecto.

### Puntos clave de Javascript

- querySelector: Nos permite seleccionar un elemento del DOM.

```javascript
document.querySelector("h1");
```

- querySelectorAll: Nos permite seleccionar todos los elementos del DOM que coincidan con el selector.

```javascript
document.querySelectorAll("li");
```

- createElement: Nos permite crear un elemento HTML.

```javascript
document.createElement("li");
```

- appendChild: Nos permite agregar un elemento HTML dentro de otro elemento HTML.

```javascript
document.querySelector("ul").appendChild("li");
```

- innerHTML: Nos permite agregar contenido HTML dentro de un elemento HTML.

```javascript
document.querySelector("h1").innerHTML = "Hola Mundo";
```

- innerText: Nos permite agregar contenido de texto dentro de un elemento HTML.

```javascript
document.querySelector("h1").innerText = "Hola Mundo";
```

- addEventListener: Nos permite agregar un evento a un elemento HTML.

```javascript
document.querySelector("button").addEventListener("click", () => {
  console.log("Hola Mundo");
});
```

- element.classList.add: Nos permite agregar una clase a un elemento HTML.

```javascript
document.querySelector("h1").classList.add("titulo");
```

- funciones: Nos permite crear una función que podemos reutilizar en nuestro código.

```javascript
function nombreDeLaFuncion() {
  // Código de la función
}
```

- arreglos o arrays: Nos permite almacenar una lista de elementos.

```javascript
const lista = ["elemento1", "elemento2", "elemento3"];
```

- metodos de array: Nos permite agregar, eliminar, modificar y recorrer los elementos de un array.

```javascript
const lista = ["elemento1", "elemento2", "elemento3"];

// push: Agregar un elemento al final del array
lista.push("elemento4");

// pop: Eliminar el ultimo elemento del array
lista.pop();

// Modificar un elemento del array
lista[0] = "elementoModificado";

// forEach: Recorrer los elementos del array
lista.forEach((elemento) => {
  console.log(elemento);
});

// splice: Nos permite eliminar elementos del array
lista.splice(0, 1); // Elimina el elemento en la posición 0
```
