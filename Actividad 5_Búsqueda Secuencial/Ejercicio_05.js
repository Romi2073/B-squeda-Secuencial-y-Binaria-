/* 5.- Crear una clase llamada ``Contacto`` con los siguientes datos:
Nombre
Apellidos
Teléfono
Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
Agregar un contacto.
Buscar un contacto por nombre. */

class Contacto {
    constructor (Nombre, Apellidos, Teléfono){
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Teléfono = Teléfono;
    }
}

class ListaContactos {
    constructor (){
        this.contactos = [];
    }

// Métodos

    agregarContacto(contacto) {
        this.contactos.push(contacto);
        console.log(`Agregar contacto: ${contacto.Nombre}, ${contacto.Apellidos}, ${contacto.Teléfono}`);
     }

     buscarContactoPorNombre(Nombre) {
        const encontrado = this.contactos.find(contacto => contacto.Nombre === Nombre);

        if (encontrado) {
            console.log(`${encontrado.Nombre}, Contacto encontrado - Teléfono: ${encontrado.Teléfono}`);
        } else {
            console.log(`Contacto con el nombre ${Nombre} no encontrado.`);
        }

        return encontrado;
     }

}

// Datos del contacto
const lista = new ListaContactos();

const contacto1 = new Contacto('Romina', 'Loyda Arenas', '7822325505');
const contacto2 = new Contacto('Luis Alfredo', 'Gómez García', '7828860530');
const contacto3 = new Contacto('Daniel', 'Hernández Bonilla', '2712457084')

lista.agregarContacto(contacto1);
lista.agregarContacto(contacto2);
lista.agregarContacto(contacto3);

lista.buscarContactoPorNombre('Alex');
lista.buscarContactoPorNombre('Romina');
lista.buscarContactoPorNombre('Diego');
lista.buscarContactoPorNombre('Luis Alfredo');