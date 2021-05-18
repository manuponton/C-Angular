var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola, " + this.nombre);
    };
    Alumno.prototype.asignarAlumno = function (nombre, apellido, peso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.peso = peso;
    };
    return Alumno;
}());
var alumno1 = new Alumno();
alumno1.nombre = "Juan";
alumno1.apellido = "Garmendia";
alumno1.peso = 12;
alumno1.mostrarMensaje();
var alumno2 = new Alumno();
alumno2.asignarAlumno("Manuel", "Ponton", 15);
alumno2.mostrarMensaje();
