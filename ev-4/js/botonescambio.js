//Botón inicial
function addElement() {
    document.querySelector('body').classList.remove('primerFondo');
    var element1 = document.getElementById('fondo1');
    element1.parentNode.removeChild(element1);
    //alert(document.getElementsByTagName("section")[1].getAttribute("class"));
    document.getElementsByTagName("section")[0].classList.remove('botonesOcultos');
    //Sumar puntos
    puntosPrimerBoton = 10;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
}

//Botones de tipografias
function tipografia1() {
    //Modificar la tipografia
    document.querySelector('body').classList.add('tipografia1');
    document.querySelector('body').classList.remove('tipografia2');
    document.querySelector('body').classList.remove('tipografia3');
    //Asignar los puntos
    puntosTipografia = 5;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
    tipografiaElegida = 'Inconsolata';
    combo11 = 0;
    combo21 = 1;
    combo31 = 0;
}

function tipografia2() {
    //Modificar la tipografia
    document.querySelector('body').classList.add('tipografia2');
    document.querySelector('body').classList.remove('tipografia1');
    document.querySelector('body').classList.remove('tipografia3');
    //Asignar los puntos
    puntosTipografia = 5;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
    tipografiaElegida = 'Segoe';
    combo11 = 1;
    combo21 = 0;
    combo31 = 0;
}

function tipografia3() {
    //Modificar la tipografia
    document.querySelector('body').classList.add('tipografia3');
    document.querySelector('body').classList.remove('tipografia1');
    document.querySelector('body').classList.remove('tipografia2');
    //Asignar los puntos
    puntosTipografia = 5;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
    tipografiaElegida = 'Arvo';
    combo11 = 0;
    combo21 = 0;
    combo31 = 1;
}

function color1() {
    //Modificar colores
    document.querySelector('body').classList.add('color-1');
    document.querySelector('body').classList.remove('color-2');
    document.querySelector('body').classList.remove('color-3');
    document.querySelector('body').classList.remove('color-4');
    //Asignar los puntos
    puntosColor = 20;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
    colorElegido = 'Colors';
    combo12 = 1;
    combo22 = 0;
    combo32 = 0;
}

function color2() {
    //Modificar colores
    document.querySelector('body').classList.add('color-2');
    document.querySelector('body').classList.remove('color-1');
    document.querySelector('body').classList.remove('color-3');
    document.querySelector('body').classList.remove('color-4');
    //Asignar los puntos
        puntosColor = 20;
        puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
        document.getElementById("porciento").innerText=puntosTotales;
        colorElegido = 'Intense';
        combo12 = 0;
        combo22 = 0;
        combo32 = 1;
}

function color3() {
    //Modificar colores
    document.querySelector('body').classList.add('color-3');
    document.querySelector('body').classList.remove('color-2');
    document.querySelector('body').classList.remove('color-1');
    document.querySelector('body').classList.remove('color-4');
    //Asignar los puntos
        puntosColor = 20;
        puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
        document.getElementById("porciento").innerText=puntosTotales;
        colorElegido = 'B & W';
        combo12 = 0;
        combo22 = 2;
        combo32 = 0;
}

function color4() {
    //Modificar colores
    document.querySelector('body').classList.add('color-4');
    document.querySelector('body').classList.remove('color-2');
    document.querySelector('body').classList.remove('color-1');
    document.querySelector('body').classList.remove('color-3');
    //Asignar los puntos
        puntosColor = 20;
        puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
        document.getElementById("porciento").innerText=puntosTotales;
    colorElegido = 'Icecream';
    combo12 = 0;
    combo22 = 1;
    combo32 = 1;
}

//cambiar tamaño de la letra 5%
function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.05) + "em";
        puntosSize = 5;
        puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
        document.getElementById("porciento").innerText=puntosTotales;
        tamañoElegido=Math.round(parseFloat(document.body.style.fontSize)*100);
}

//Fase 2 Contenidos
//Botón 2 FIJAR ESTILOS
function addElement2() {
    document.querySelector('body').classList.add('fase1end'); //Elimina el boton y texto de la fase 1
    var element3 = document.getElementById('botonSegundaFase');
    element3.parentNode.removeChild(element3); //Se elimina a si mismo
    var element4 = document.getElementById('botonesEstilos');
    element4.parentNode.removeChild(element4); //Elimina los estilos
    puntosFijarEstilos = 3;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
}

//Introducir los contenidos de la fase 2
function mostrarContenido() {
    contenidos++;
    if (contenidos<4) {
        document.getElementsByClassName("fase2contenido")[0].classList.remove('fase2contenido');
        document.getElementById("botonAñadirContenido").innerText = "Añadir contenido "+contenidos+"/3";
        if (controlBotonesEjemplos==0){
            document.getElementsByClassName("ocultarBotonEjemplos")[0].classList.remove('ocultarBotonEjemplos');
            document.getElementsByClassName("ocultarBotonEjemplos")[0].classList.remove('ocultarBotonEjemplos');
            controlBotonesEjemplos++;
        }
        puntosContenidos = contenidos*3;
        puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
        document.getElementById("porciento").innerText=puntosTotales;
    }
    if (contenidos==3) {
        document.getElementById("botonAñadirContenido").innerText = "Eliminar Botón";
    }
    if (contenidos==4) {
    var elementActual = document.getElementById('botonAñadirContenido');
    elementActual.parentNode.removeChild(elementActual);//Se elimina a si mismo
    }
}

//Mostrar los ejemplos de la fase 2
function mostrarEjemplos() {
    if (controlEjemplos==0) {
        document.getElementById('botonEjemplos').innerText = 'Quitar Ejemplos';//Cambiamos el texto del botón
        document.getElementsByClassName("ocultarEjemplos")[0].classList.remove("ocultarEjemplos");
        document.getElementsByClassName("ocultarEjemplos")[0].classList.remove("ocultarEjemplos");
        document.getElementsByClassName("ocultarEjemplos")[0].classList.remove("ocultarEjemplos");
        puntosEjemplos = 4;
        puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
        document.getElementById("porciento").innerText=puntosTotales;
        controlEjemplos++;
        return;
    }
    if (controlEjemplos==1){
        document.getElementById('botonEjemplos').innerText = 'Añadir Ejemplos';//Recuperamos el texto del botón
        document.getElementsByClassName("mostrarEjemplos")[0].classList.add("ocultarEjemplos");
        document.getElementsByClassName("mostrarEjemplos")[1].classList.add("ocultarEjemplos");
        document.getElementsByClassName("mostrarEjemplos")[2].classList.add("ocultarEjemplos");
        controlEjemplos--;
        return;
    }
}

//Eliminar botones de contenidos
function eliminarBotonesC() {
    var botonContenidos = document.getElementsByClassName('botonesContenidos1');
    botonContenidos[0].classList.add("botonesContenidos1ocultar"); //Elimina los botones de que introducen contenidos
    botonContenidos[1].classList.add("botonesContenidos1ocultar"); //Elimina los botones de que introducen contenidos
    puntosFijarContenidos = 5;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
}

// Fase 3
//Botón 3
function addElement3() {
    //document.querySelector('body').classList.add('fase2end'); //Elimina el boton y texto de la fase 1
    var element6 = document.getElementById('botonTerceraFase');
    element6.parentNode.removeChild(element6); //Se elimina a si mismo
    //var element6 = document.getElementById('botonesContenidos1');
    //element6.parentNode.removeChild(element6); //Elimina los estilos
    document.getElementsByClassName("fase3")[0].classList.remove('fase3');//Introduce el nuevo Section
    puntosSeccion2 = 7;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
}

function mostrarAlumnos() {
    if (controlAlumnos==0) {
        document.getElementById('mostrarAlumnos').innerText = 'Quitar Alumnos';//Cambiamos el texto del botón
        document.getElementsByClassName("fase3contenido")[0].classList.remove("fase3contenido");
        puntosAlumnos = 8;
        puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
        document.getElementById("porciento").innerText=puntosTotales;
        controlAlumnos++;
        return;
    }
    if (controlAlumnos==1){
        document.getElementById('mostrarAlumnos').innerText = 'Introducir Alumnos';//Recuperamos el texto del botón
        document.getElementsByClassName("fase3figs")[0].classList.add("fase3contenido");
        controlAlumnos--;
        return;
    }
}

function mostrarProfesores() {
    if (controlProfesores==0) {
        document.getElementById('mostrarProfesores').innerText = 'Quitar Profesores';//Cambiamos el texto del botón
        document.getElementsByClassName("fase3figs2")[0].classList.remove("fase3contenido2");
        controlProfesores++;
        puntosProfesores = 4;
        puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
        document.getElementById("porciento").innerText=puntosTotales;
        return;
    }
    if (controlProfesores==1){
        document.getElementById('mostrarProfesores').innerText = 'Introducir Profesores';//Recuperamos el texto del botón
        document.getElementsByClassName("fase3figs2")[0].classList.add("fase3contenido2");
        controlProfesores--;
        return;
    }
}

function eliminarBotonesAP() {
    var element7 = document.getElementById('botonesContenidos2');
    element7.parentNode.removeChild(element7); //Elimina los botones de la sección
    puntosEliminarBotonesAP = 5;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
}

// Fase 4
//Botón 4
function addElement4() {
    //document.querySelector('body').classList.add('fase2end'); //Elimina el boton y texto de la fase 1
    var element8 = document.getElementById('botonCuartaFase');
    element8.parentNode.removeChild(element8); //Se elimina a si mismo
    //var element6 = document.getElementById('botonesContenidos1');
    //element6.parentNode.removeChild(element6); //Elimina los estilos
    document.getElementsByClassName("fase4")[0].classList.remove('fase4');//Introduce el nuevo Section
    puntosAñadirCuatro = 15;
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
}

function addElement5() {
    puntosBotonFinal = 5;
    var element8 = document.getElementById('botonFinal');
    element8.parentNode.removeChild(element8); //Se elimina a si mismo
    puntosTotales = parseInt(puntosPrimerBoton)+parseInt(puntosTipografia)+parseInt(puntosColor)+parseInt(puntosSize)+parseInt(puntosFijarContenidos)+parseInt(puntosSeccion2)+parseInt(puntosFijarEstilos)+parseInt(puntosContenidos)+parseInt(puntosEjemplos)+parseInt(puntosAlumnos)+parseInt(puntosProfesores)+parseInt(puntosEliminarBotonesAP)+parseInt(puntosAñadirCuatro)+parseInt(puntosBotonFinal);
    document.getElementById("porciento").innerText=puntosTotales;
}

function obtenerResultados() {
    document.getElementById("porciento2").innerText=puntosTotales;
    document.getElementById("tipografiaElegida").innerText=tipografiaElegida;
    if (tipografiaElegida=='Arial') {
        tipografiaPuntos=100;
    }
    if (tipografiaElegida=='Inconsolata') {
        tipografiaPuntos=50;
    }
    if (tipografiaElegida=='Segoe') {
        tipografiaPuntos=400;
    }
    if (tipografiaElegida=='Arvo') {
        tipografiaPuntos=200;
    }
    document.getElementById("tipografiaElegida").innerText=tipografiaElegida;
    if (colorElegido=='Básico') {
        colorPuntos=-100;
    }
    if (colorElegido=='Colors') {
        colorPuntos=300;
    }
    if (colorElegido=='Intense') {
        colorPuntos=0;
    }
    if (colorElegido=='B & W') {
        colorPuntos=100;
    }
    if (colorElegido=='Icecream') {
        colorPuntos=200;
    }
    document.getElementById("colorElegido").innerText=colorElegido;
    document.getElementById("tamañoElegido").innerText=tamañoElegido;
    if (controlProfesores==0) {
        if (controlAlumnos==0) {
        document.getElementById("APElegido").innerText='Todos ocultos';
        }
        if (controlAlumnos==1) {
        document.getElementById("APElegido").innerText='Mostrando Alumnos';
        }
    }
    if (controlProfesores==1) {
        if (controlAlumnos==0) {
        document.getElementById("APElegido").innerText='Mostrando profesores';
        }
        if (controlAlumnos==1) {
        document.getElementById("APElegido").innerText='Mostrando todos';
        }
    }
    calculoPuntos = (controlProfesores*100)+(controlAlumnos*100)+(controlAlumnos*controlProfesores*100)+colorPuntos+tipografiaPuntos+(puntosEliminarBotonesAP*30)+(puntosFijarContenidos*12)+(combo11*combo12*300)+(combo21*combo22*300)+(combo31*combo32*300)+(puntosFijarEstilos*30)+(puntosEjemplos*10);
    score = calculoPuntos.toString();
    document.getElementById("puntuacion").innerText = score;
    document.getElementById("inputpuntuacio").value = parseInt(calculoPuntos);
}