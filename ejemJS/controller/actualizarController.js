import { clientServices } from "../Service/clientService.js";

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
        window.location.href="/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]")
    const email = document.querySelector("[data-email]")

    try{
        const perfil = await clientServices.detalleCliente(id)
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre
            email.value = perfil.email
        }else{
            throw new Error()
        }
    }catch(error){
        console.log("Catch error", error)
        windows.location.href = "/screens/error.hmtl"
    }
}

obtenerInfo();


formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const url= new URL(window.location);
    const id =url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices.actualizarCLiente(nombre,email,id).then(()=>{
        window.location.href="../screens/edicion_concluida.html";
    });

});


