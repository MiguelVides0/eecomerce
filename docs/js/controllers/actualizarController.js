import { productoServices } from "../services/productosservicios.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id)
    const imageUrl = document.querySelector("[data-form-image]");
    const section = document.querySelector("[data-form-section]");
    const name = document.querySelector("[data-form-name]");
    const price = document.querySelector("[data-form-price]");
    const description = document.querySelector("[data-form-description]");

    try{
        const producto = await productoServices.detalleProducto(id);
        imageUrl.value = producto.imageUrl;
        section.value = producto.section;
        name.value = producto.name;
        price.value = producto.price;
        description.value = producto.description;
    }catch(error){
        console.log(error)
    }
}

obtenerInfo();

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imageUrl = document.querySelector("[data-form-image]").value;
    const section = document.querySelector("[data-form-section]").value;
    const name = document.querySelector("[data-form-name]").value;
    const price = document.querySelector("[data-form-price]").value;
    const description = document.querySelector("[data-form-description]").value;

    productoServices.actualizarProducto(imageUrl,section,name,price,description,id).then(()=>
    alert("PRODUCTO ACTUALIZADO"))
})

