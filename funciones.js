const guardar_Contacto = (db, contacto) => {
        //enviando al localstorage el objeto 
        //contacto por medio del metodo setItem 
        //pero parseandolo como un string para
        //poder identificar despues
        db.setItem(contacto.id, JSON.stringify(contacto))
            //accediendo al objeto window del dom para
            //redireccion forzada a la raiz del proyecto
        window.location.href = '/'
    }
    // CARGANDO CONTACTOS DESDE EL LOCAL STORAGE
const cargar_Contactos = (db, parentNode) => {
    let claves = Object.keys(db) //accediendo a las llaves del objeto del localstorage
        /*     console.log(claves);
         */
    for (clave of claves) { //recorriendolas
        let contacto = JSON.parse(db.getItem(clave))
            /* console.log(contacto.nombre);
             */
        crearContacto(parentNode, contacto, db)
    }
}
const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('p')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete_forever'
    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')
    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)
    parentNode.appendChild(divContacto)

}