var cantidadDeNumerosEnviados = 50;
switch (cantidadDeNumerosEnviados) {
    case 25:
        console.log("Son veinte y cinco");
        break;
    case 20:
        console.log("Son veinte");
        break;
    case 12:
        console.log("Son quince");
        break;
    default:
        console.log("No se cumplió ninguna expresion.");
}
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albums"] = 2] = "albums";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
var menu = 1;
switch (menu) {
    case tipoMenu.canciones:
        console.log("Son canciones");
        break;
    case tipoMenu.albums:
        console.log("Son albumes");
        console.log("Son albumes");
        break;
    case tipoMenu.perfil:
        console.log("Son perfiles");
        break;
    default:
        break;
}
