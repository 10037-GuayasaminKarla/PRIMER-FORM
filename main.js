//funcion declarativa
function cambioColores(boton,colorNuevo){
    boton = colorNuevo;
}
cambioColores();

//funciones expresivas
const cambioColores2 = function(boton,colorNuevo){
    boton = colorNuevo;
}

cambioColores2();