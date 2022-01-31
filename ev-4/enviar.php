<?php
# FileName="Connection_php_mysqli.htm"
# Type="MYSQL"
# HTTP="true"
$nom = $_POST['nom'];
$puntuacio = $_POST['inputpuntuacio'];

$hostname_puntuaciones = "localhost";
$database_puntuaciones = "puntuaciones";
$username_puntuaciones = "rrr";
$password_puntuaciones = "R5sxf7@1";
$conexion = mysqli_connect($hostname_puntuaciones, $username_puntuaciones, $password_puntuaciones, $database_puntuaciones) or trigger_error(mysqli_error($puntuaciones),E_USER_ERROR);
mysqli_set_charset($conexion,'utf8');
mysqli_select_db($conexion,$database_puntuaciones);
$insertSQL = "INSERT INTO clasificacion (nom,puntuacio) VALUES ('$nom','$puntuacio')";
$resultat = mysqli_query($conexion,$insertSQL) or die(mysqli_error($conexion));
header('location:resultados.php');
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Vesper+Libre&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/tema.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>Espai Visual</title>
</head>

<body class="d-flex flex-column puntuacionesFondo" id="body">
    <div style="overflow-x:hidden">
        <header class="container-fluid sin-fondo">
            <nav class="navbar navbar-light navbar-1 white">
                <a class="navbar-brand" href="index.html" id="navbar-brand" lang="ca">ESPAI VISUAL</a>
                <div id="menuToggle">
                    <input id="hamburguer" type="checkbox">
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Balmes</a></li>
                        <li><a href="">Balmes Innova</a></li>
                        <li><a href="">Información</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <main class="flex-shrink-0 sin-fondo">
            <section>
                <div class="container">
                    <p class="h3">Estas siendo redireccionado a la página de resultados.</p>
                </div>
            </section>
        </main>
        <footer class="p-3 sin-fondo">
            <p><span lang="en">Made By</span> Roger Rocho</p>
        </footer>
    </div>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/botonescambio.js"></script>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/giro-cartas.js"></script>
    <script>
        //Varibles que limitan el numero de usos de las funciones
        var contenidos = 0;
        var controlBotonesEjemplos = 0;
        var controlEjemplos = 0;
        var controlAlumnos = 0;
        var controlProfesores = 0;
        //Variables que añaden los puntos
        var puntosPrimerBoton = 0;
        var puntosTipografia = 0;
        var puntosContenidos = 0;
        var puntosColor = 0;
        var puntosSize = 0;
        var puntosFijarContenidos = 0;
        var puntosSeccion2 = 0;
        var puntosFijarEstilos = 0;
        var puntosEjemplos = 0;
        var puntosFijarContenidos = 0;
        var puntosProfesores = 0;
        var puntosAlumnos = 0;
        var puntosFijarGente = 0;
        var puntosTotales = 0;
        var puntosEliminarBotonesAP = 0;
        var puntosAñadirCuatro = 0
        var puntosBotonFinal = 0;
        var combo1 = 0;
        var tipografiaElegida = 'Arial';
        var colorElegido = 'básico';
        var tamañoElegido = '100'
        var tipografiaPuntos = 0;
        var coloresPuntos = 0;
        var APElegido = 'no se muestran';
        var calculoPuntos = '0';
        var score = 0;
        var colorPuntos = 0;
        var combo11 = 0;
        var combo21 = 0;
        var combo31 = 0;
        var combo12 = 0;
        var combo22 = 0;
        var combo32 = 0;
    </script>
    <script>
        $(function () {
            $("#menu").hide();
            $("#hamburguer").click(function () {
                $("#menu").toggle("swing");
            });
        });
    </script>
</body>

</html>