var listadoDeUsuarios = [
    { nombre: "Manuel", apellido: "Castro" },
    { nombre: "Carlos", apellido: "Castro" },
];
for (var i = 0; i < listadoDeUsuarios.length; i++) {
    console.log(listadoDeUsuarios[i].nombre);
}
for (var posicion in listadoDeUsuarios) {
    console.log(listadoDeUsuarios[posicion].nombre);
    console.log(listadoDeUsuarios[posicion].apellido);
}
