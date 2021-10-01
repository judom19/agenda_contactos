const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btn_agregar_tarea = document.querySelector('.btn-agregar-tarea')

const listado_tareas = document.querySelector('.listado-tareas')
    //LLAMANDO AL OBJETO LOCAL STORAGE 
    //ALMACENANDOLO EN UNA VARIABLE
const db = window.localStorage
    //CREANDO LA FUNCION QUE VA A DESENCADENAR EL EVENTO ONCLICK
btn_agregar_tarea.onclick = () => {
    let contacto = {
            id: Math.random(1, 100),
            //asignando el nombre de el valor capturado 
            //en la variable nombre
            nombre: nombre.value,
            numero: numero.value,
            direccion: direccion.value,
        }
        //LLAMANDO LA FUNCION DONDE SE GUARDA EL LOCAL STORAGE
        //Y EL OBJETO CONTACTO  
    guardar_Contacto(db, contacto)
}
cargar_Contactos(db, listado_tareas)