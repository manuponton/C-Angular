var listadoDeNombres: Array<string> = ["Juan", "Mateo", "Jorge", "Carmen"]
console.log(listadoDeNombres)
console.log(listadoDeNombres [2])

var listadoDeNumeros: Array<number> = [15, 56, 8, 15, 7, 2, 4, 7, 23, 5, 1, 5, 96, 84, 27, 0, 69, 19]
console.log(listadoDeNumeros[1])

interface Alumnos {
    nombre: string,
    edad: number
}

var listadoDeAlumnos: Array<Alumnos> = [
    {
        nombre: "Jorge", edad: 50
    },
    {
        nombre: "Ana", edad: 95
    }, {
        nombre: "Carlos", edad: 12
    },
]
console.log(listadoDeAlumnos)
console.log(listadoDeAlumnos[2])
console.log(listadoDeAlumnos[2].nombre)
