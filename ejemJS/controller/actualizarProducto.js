import {productoServices} from "../Service/productoService.js"

const formulario =document.querySelector("[data-form]");

/*const obtenerInfo=()=>{
    const url = new URL(window.location)
    const id = url.searchParams.get("id");

    if (id==null){
        window.location.href="/screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]");
    const email =document.querySelector("[data-email]");

    clientServices.detalleCliente(id).then((perfil)=>{
        nombre.value=perfil.nombre,
        email.value=perfil.email
    });
};*/

const obtenerInfo = async()=>{
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"))
    if(id == null){
        window.location.href="../screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]")
    const precio= document.querySelector("[data-producto]")
    const stock = document.querySelector("[data-stock]")

    try{
        const producto = await productoServices.detalleProducto(id)
        if(producto.nombre && producto.precio && producto.stock){
            nombre.value = producto.nombre
            precio.value = producto.precio
            stock.value = producto.stock
        }else{
            throw new Error()
        }
    }catch(error){
        console.log("Catch error", error)
        windows.location.href = "../screens/error.hmtl"
    }
}
obtenerInfo();


formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const url= new URL(window.location);
    const id =url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const stock = document.querySelector("[data-stock]").value;
    productoServices.actualizarProducto(nombre,precio,stock,id).then(()=>{
        window.location.href="../screens/edicion_concluida.html";
    });

});