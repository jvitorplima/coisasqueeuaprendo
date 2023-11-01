function mudar()
 {
    var tela = document.getElementById("catalogo").style.display;
    if (tela == "block") 
    {
        document.getElementById("catalogo").style.display = 'none';
    }
    else {
        document.getElementById("catalogo").style.display = 'block';
    }
}