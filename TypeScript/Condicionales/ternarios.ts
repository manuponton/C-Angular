var nombre: string, edad: number = 15
if (edad > 10) {
    nombre = "Juan"
    console.log(nombre)
}
nombre = edad > 10 ? "Juan de ternario" : "No se cumplió condicional"
console.log(nombre)
