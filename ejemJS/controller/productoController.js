import {productoServices} from "../Service/productoService.js"

console.log(productoServices)


const crearNuevaLinea =(nombre,precio,stock,id) =>{
    const linea =document.createElement('tr');
    const contenido = `
    <td class="td" data-td>
        ${nombre}
        </td>
            <td>${precio} Bs.</td>
            <td>${stock}</td>
            <td>
            <ul class="table__button-control">
                <li>
                <a
                    href="../screens/editar_producto.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                >
                </li>
                <li>
                <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}">
                    Eliminar
                </button>
                </li>
            </ul>
            </td>
    `;
linea.innerHTML= contenido;
const btn = linea.querySelector("button");
btn.addEventListener("click",()=>{
    const id = btn.id;

    productoServices.eliminarProducto(id).then(respuesta=>{
        console.log(respuesta)
    }).catch (error => console.log("ERROR"));

});

return linea;
};
const table =document.querySelector("[data-table-producto]")
//create - post
// read - get 
//update - put/patch
//delete - delete
productoServices
.listaProducto()
    .then((data)=>{
        data.forEach((producto)=> {
            const nuevaLinea=crearNuevaLinea(producto.nombre, producto.precio, producto.stock, producto.id);
            table.appendChild(nuevaLinea); 
        });
    })
.catch((error)=>alert("error")); 