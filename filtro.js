// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos")//Se corrigió el get element 
const $i = document.querySelector('.input');
//Se crea función para llamar productos
function displayProductos(productos) {
  productos.forEach(producto => { //Creo que es mejor con un forEach para que aparezca sin hacer un for/while
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  });
}

displayProductos(productos) //Se creó la función para que pudiera  llamarse
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
//Creo que esta parte se puede omitir porque ya estaba la otra que escribí que era el forEach
  // for (let i = 0; i < productosFiltrados.length; i++) {
  //   var d = document.createElement("div")
  //   d.classList.add("producto")
  
  //   var ti = document.createElement("p")
  //   ti.classList.add("titulo")
  //   ti.textContent = productosFiltrados[i].nombre
    
  //   var imagen = document.createElement("img");
  //   imagen.setAttribute('src', productosFiltrados[i].img);
  
  //   d.appendChild(ti)
  //   d.appendChild(imagen)
  
  //   li.appendChild(d)
  // }
  displayProductos(productosFiltrados); 
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  