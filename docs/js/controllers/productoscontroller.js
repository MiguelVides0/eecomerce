import { productoServices } from "../services/productosservicios.js"; 


const nuevoProducto = (name, price, imageUrl) =>{
    const card = document.createElement("div");
    const contenido = `<div class="star__card">
    <img class="star__card-img" src="${imageUrl}" alt="">
    <h4 class="star__card-titulo">${name}</h4>
    <h4 class="star__card-precio">${price}</h4>
    <a href="#" class="star__card-producto"> Ver producto</a>
    </div>`
    card.innerHTML = contenido;
    card.classList.add("star__cards");
    return card;
}

const productoStar = document.querySelector("[datos-productos-star]");

const productoConsola = document.querySelector("[data-productos-consolas]");

const productoDiversos = document.querySelector("[data-productos-diversos]")

const render = async () =>{
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            if(elemento.section == "Star wars"){
                productoStar.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl))
            } else if (elemento.section == "Consolas"){
                productoConsola.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl));
            }
            else if(elemento.section == "Diversos"){
                productoDiversos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl));
            }
        });
    } 
    catch(error){
        console.log(error, " Hubo un error")
    }
}

render();