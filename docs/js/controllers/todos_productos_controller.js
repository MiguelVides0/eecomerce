import { productoServices } from "../services/productosservicios.js";

const crearCards = (name, price, imageUrl, id) =>{
    const card = document.createElement("div");
    const cardTodo = `<div class="todos__card">
    <img class="todos__card-img" src="${imageUrl}" alt="producto">
    <div class="icons">
        <img class="eliminar__icon" src="multimedia/eliminar.png" alt="borrarIcon" data-eliminar id="${id}">
        <a href="editar.html?id=${id}" target="_blank" >
        <img class="editar__icon" src="multimedia/editar.png" alt="editarIcon" data-editar ">
        </a>
    </div>
    <h4 class="todos__card-titulo">${name}</h4>
    <h4 class="todos__card-precio">${price}</h4>
    </div>`
    card.innerHTML = cardTodo;
    card.classList.add("todos__card");
    const eliminar = card.querySelector("[data-eliminar]");
    console.log(eliminar)
    eliminar.addEventListener("click", () =>{
        const id = eliminar.id;
        console.log(id);
        productoServices.eliminarProducto(id).then(()=>{
            alert("Producto eliminado")
        }).catch(error => alert("Ocurrió un error ", error))
    })
    return card;
}

const todosProductos = document.querySelector("[data-productos-todos]");

const render = async () =>{
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            todosProductos.appendChild(crearCards(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
        });
    } 
    catch(error){
        console.log(error, " Hubo un error")
    }
}

render();