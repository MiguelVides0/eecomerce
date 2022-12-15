import { productoServices } from "../services/productosservicios.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imageUrl = document.querySelector("[data-form-image]").value;
    const section = document.querySelector("[data-form-section]").value;
    const name = document.querySelector("[data-form-name]").value;
    const price = document.querySelector("[data-form-price]").value;
    const description = document.querySelector("[data-form-description]").value;
    productoServices.crearProducto(imageUrl,section,name,price,description).then(() => {
        alert("REGISTRO COMPLETADO Y GUARDADO")
    }).catch(err => alert("ERROR ", err));
} );