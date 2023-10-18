
const listaProducto =()=> fetch("http://localhost:3000/producto").then(respuesta=>respuesta.json());

const crearProducto=(nombre,Precio,Stock)=>{
    return fetch("http://localhost:3000/producto",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({nombre,Precio,Stock, idProducto: uuid.v4()}),

    });
};

const eliminarProducto=(idProducto)=>{
    return fetch(`http://localhost:3000/producto/${idProducto}`, {
        method: "DELETE"
    });
};

const detalleProducto=(idProducto)=>{

    return fetch(`http://localhost:3000/producto/${idProducto}`).then((respuesta)=>
    respuesta.json());
};

const actualizarProducto=(nombre,Precio,Stock,idProducto)=>{
    return fetch(`http://localhost:3000/producto/${idProducto}`,{

        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre,Precio,Stock}),
    })
    .then((respuesta)=>(respuesta))
    .catch((error)=>console.log(error))

}




export const productoServices={
    listaProducto,
    crearProducto,
    detalleProducto,
    actualizarProducto,
    eliminarProducto
};