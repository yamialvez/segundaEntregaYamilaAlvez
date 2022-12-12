//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}



const productos = [
    {id:01, tipo:"Cacerola", nombre:"Cacerola 18 cm", precio: 45000, foto: "/img/cacerola 18 cm.jpeg" },
    {id:02, tipo:"Cacerola", nombre:"Cacerola 20 cm", precio: 55000, foto: "/img/cacelola 20cm.jpeg" },
    {id:03, tipo:"Cacerola", nombre:"Cacerola 24 cm", precio: 65000, foto: "/img/cacerola 24 cm.jpeg" },
    {id:04, tipo:"Sarten", nombre:"Sarten 18 cm", precio: 35000, foto: "/img/sarten 18 cm.jpeg" },
    {id:05, tipo:"Sarten", nombre:"Sarten 20 cm", precio: 45000, foto: "/img/sarten 20 cm.jpeg" },
    {id:06, tipo:"Sarten", nombre:"Sarten 24 cm", precio: 55000, foto: "/img/sarten 24 cm.jpeg" },
    {id:07, tipo: "Otro", nombre: "flip", precio: 45000, foto: "/img/flip.jpeg"},
    {id:08, tipo: "Otro", nombre: "Savarin", precio: 38000, foto: "/img/savarin.jpeg"},
    {id:09, tipo: "Otro", nombre: "Wok", precio: 68000, foto: "/img/wok.jpeg"},
    {id:10, tipo: "Accesorios", nombre: "Mate", precio: 3800, foto: "/img/mate.jpeg"},
    {id:11, tipo: "Accesorios", nombre: "Kit espatula", precio: 2900, foto: "/img/espatulas.jpeg"},
    {id:12, tipo: "Accesorios", nombre: "Centrifugador de vegetales", precio: 6200, foto: "/img/centrifugador.jpeg"},
];
