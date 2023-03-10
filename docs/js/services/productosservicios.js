//GET

const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json())

const crearProducto = (imageUrl, section, name, price, description) =>{
    return fetch("http://localhost:3000/producto",{
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({imageUrl, section, name, price, description, id:uuid.v4(), alt:"Product"})
    })
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json())
}

const actualizarProducto = (imageUrl, section, name, price, description, id) =>{
    return fetch(`http://localhost:3000/producto/${id}`,{
        method : "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({imageUrl, section, name, price, description})
    }).then( (respuesta) => respuesta).catch((err) => alert("Error ",err))
}

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`, {
      method: "DELETE"
    })
  };

export const productoServices ={
    listaProductos,
    crearProducto,
    detalleProducto,
    actualizarProducto,
    eliminarProducto
}