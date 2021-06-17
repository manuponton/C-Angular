class Alumno {
    private  nombre: string
    private apellido: string
    private peso: number

    mostrarMensaje(): void {
        console.log("Hola, " + this.nombre)
    }

    asignarAlumno(nombre: string, apellido: string, peso: number) {
        this.nombre = nombre
        this.apellido = apellido
        this.peso = peso
    }
}

var alumno1: Alumno = new Alumno();
alumno1.mostrarMensaje()

var alumno2: Alumno = new Alumno();
alumno2.asignarAlumno("Manuel", "Ponton", 15)
alumno2.mostrarMensaje()

