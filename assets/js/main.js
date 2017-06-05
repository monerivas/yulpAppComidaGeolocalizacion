var arregloRestaurantes = [
    {
        nombre: "Zapote",
        direccion: "Calle Guanajuato 138, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
        latitud: 19.416378,
        longitud: -99.16085,
        comida: "mediterránea"
  },
    {
        nombre: "El Japonez",
        direccion: "Av. Vicente Suarez 42A, Cuauhtemoc, Hipódromo Condesa, 06170 Ciudad de México, CDMX",
        latitud: 19.4111767,
        longitud: -99.1749857,
        comida: "japones"
   },
    {
        nombre: "Fonda Mexicana",
        direccion: "Avenida Montevideo 279, Gustavo A. Madero, Lindavista",
        latitud: 19.4901029,
        longitud: -99.1309569,
        comida: "mexicana"
   },
    {
        nombre: "El Cardenal",
        direccion: "Av. de la Paz Núm. 32, Alvaro Obregon, San Ángel, 01000 Ciudad de México, CDMX",
        latitud: 19.34692,
        longitud: -99.1887497,
        comida: "mexicana"
   },
    {
        nombre: "Falafelito",
        direccion: "Av. México 105, Hipódromo Condesa, 06100, CDMX.",
        latitud: 19.4102471,
        longitud: -99.1704605,
        comida: "Vegana"
}];
/*-------OBJETOS-------------*/

/*document.getElementById("listaRestaurantes").innerHTML = arregloRestaurantes;*/

var plantillaRestaurante = '<article class="row contact">' +
        '<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
          '<div class="row valign-wrapper">' +
            '<div class="col s3">' +
            '</div>' +
            '<div class="col s9">' +
            	'<h5 class="name">__nombreRestaurante__</h5>' +
              '<span class="black-text">' +
                'direction: __direccion__' +
              '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
	'</article>';



