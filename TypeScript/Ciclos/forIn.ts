interface Usuarios {
    nombre:string,
    apellido:string
}
var listadoDeUsuarios:Array<Usuarios> = [
    {nombre : "Manuel", apellido: "Castro"},
    {nombre : "Carlos", apellido: "Castro"},
]
for (let i:number = 0;i <listadoDeUsuarios.length; i++){
    console.log(listadoDeUsuarios[i].nombre)
}
for (let posicion in listadoDeUsuarios){
    console.log(listadoDeUsuarios[posicion].nombre)
    console.log(listadoDeUsuarios[posicion].apellido)
}
