var cantidadSolicitada: number = 5
var deseaImprimir: boolean = false

if (deseaImprimir) {
    console.log("Estamos imprimiendo")
    cantidadSolicitada = 50
    if (cantidadSolicitada > 10) {
        console.log("Tienes que aplicar un descuento")
    }
} else {
    console.log("La cantidad solicitada no tiene descuento")
}

