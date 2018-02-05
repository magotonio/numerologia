function localStorageGetItem() {
  var value;
  try {
    value = localStorage.getItem("numerologia");
  } catch (e) {
    value = window.name;
  }
  return value;
}
function localStorageSetItem(value) {
  try {
    localStorage.setItem("numerologia", value);
  } catch (e) {
    window.name = value;
  }
}
function _reset() {
  localStorageSetItem("{}");
}
window.app.load = function() {
  var _contador = 0;
  var queryStringFn = function(query) {
    var urlParams;
    var match,
      pl = /\+/g, // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function(s) {
        return decodeURIComponent(s.replace(pl, " "));
      };

    urlParams = {};
    match = search.exec(query);
    while (match) {
      urlParams[decode(match[1])] = decode(match[2]);
      match = search.exec(query);
    }
    return urlParams;
  };
  var qsObj = queryStringFn(window.location.search.substring(1));
  var navigateQueryString = function() {
    var strQs = "";
    _.each(_.keys(qsObj), function(k) {
      strQs = strQs + (strQs === "" ? "" : "&") + k + "=" + qsObj[k];
    });
    setDataObj();
    window.location.href = window.location.pathname + "?" + strQs;
  };

  // DATOS * * * * * * * * * * * * >>>>
  var arrNumeros = [];
  arrNumeros[0] =
    "El número 0 simboliza el elemento femenino,el caos,el océano.";
  arrNumeros[1] =
    "El número 1 simboliza el liderazgo puro, la energía el individualismo y el egoismo material.";
  arrNumeros[2] =
    "El número 2 simboliza la dualidad, la pareje que puede ver los dos lados de cualquier situación y de la vida.";
  arrNumeros[3] = "El número 3 simboliza el pasado, el presente y el futuro.";
  arrNumeros[4] =
    "El número 4 simboliza la estabilidad, el orden, la ley y la estabilidad.";
  arrNumeros[5] =
    "El número 5 simboliza la libertad, la vitalidad, la aventura , la polémica y la controversia.";
  arrNumeros[6] = "El número 6 simboliza la justicia y el orden.";
  arrNumeros[7] = "El número 7 simboliza la seguridad y la protección.";
  arrNumeros[8] = "El número 8 simboliza el poder.";
  arrNumeros[9] = "El número 9 simboliza el misticismo.";
  arrNumeros[10] =
    "El número 10 simboliza el cambio inevitable que termina con los ciclos y que inicia otros nuevos para permitirle evolucionar al ser humano.";
  arrNumeros[11] =
    "El número 11 simboliza el idealismo, la energía, determinació, fuerza, la intuación y muchas contradicciones.";
  arrNumeros[12] =
    "El número 12 simboliza el número armónico para el trabajo en grupo.";
  arrNumeros[13] =
    "El número 13 simboliza el paso definitivo de cruzar la puerta que conduce hacia una nueva existencia, una nueva vida.";
  arrNumeros[14] =
    "El número 14 simboliza el servicio, porque Jacob sirvió a su tío Labán durante catorce años.";
  arrNumeros[15] =
    "El número 15 simboliza la libertad de movimientos y se considera el número de la juventud.";
  var arrSSP = [];
  if (qsObj.esp) {
    arrSSP[0] = "el 7 de Oros";
    arrSSP[1] = "el 4 de Copas";
    arrSSP[2] = "el As de Espadas";
    arrSSP[3] = "la Sota de Oros";
    arrSSP[4] = "el 5 de Copas";
    arrSSP[5] = "el 2 de Espadas";
    arrSSP[6] = "el Caballo de Oros";
    arrSSP[7] = "el 6 de Copas";
    arrSSP[8] = "el 3 de Espadas";
    arrSSP[9] = "el Rey de Oros";
    arrSSP[10] = "el 7 de Copas";
    arrSSP[11] = "el 4 de Espadas";
    arrSSP[12] = "el As de Bastos";
    arrSSP[13] = "la Sota de Copas";
    arrSSP[14] = "el 5 de Espadas";
    arrSSP[15] = "el 2 de Bastos";
    arrSSP[16] = "el Caballo de Copas";
  } else {
    arrSSP[0] = "el 9 de Picas";
    arrSSP[1] = "el 5 de Corazones";
    arrSSP[2] = "el As de Tréboles";
    arrSSP[3] = "el 10 de Picas";
    arrSSP[4] = "el 6 de Corazones";
    arrSSP[5] = "el 2 de Tréboles";
    arrSSP[6] = "la Jota de Picas";
    arrSSP[7] = "el 7 de Corazones";
    arrSSP[8] = "el 3 de Tréboles";
    arrSSP[9] = "la Reina de Picas";
    arrSSP[10] = "el 8 de Corazones";
    arrSSP[11] = "el 4 de Tréboles";
    arrSSP[12] = "el Rey de Picas";
    arrSSP[13] = "el 9 de Corazones";
    arrSSP[14] = "el 5 de Tréboles";
    arrSSP[15] = "el As de Diamantes";
    arrSSP[16] = "el 10 de Corazones";
  }
  var arrPalos = "Picas|Corazones|Tréboles|Diamantes".split("|");
  var arrIndices = "el As|el 2|el 3|el 4|el 5|el 6|el 7|el 8|el 9|el 10|la Jota|la Reina|el Rey".split(
    "|"
  );
  var arrBaraja = [];
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 13; j++) {
      arrBaraja.push(arrIndices[j] + " de " + arrPalos[i]);
    }
  }

  var arrPalosEsp = "Oros|Copas|Espadas|Bastos".split("|");
  var arrIndicesEsp = "el As|el 2|el 3|el 4|el 5|el 6|el 7|la Sota|el Caballo|el Rey".split(
    "|"
  );
  var arrBarajaEsp = [];
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 10; j++) {
      arrBarajaEsp.push(arrIndicesEsp[j] + " de " + arrPalosEsp[i]);
    }
  }

  var dataObj = localStorageGetItem();
  var setDataObj = function() {
    localStorageSetItem(JSON.stringify(dataObj));
  };
  if (dataObj) {
    dataObj = JSON.parse(dataObj);
  } else {
    dataObj = {};
  }
  if (dataObj.ver !== _appVer) {
    dataObj = {};
  }
  if (!dataObj.ver) {
    dataObj.ver = _appVer;
    var arrExentosConU = "Corona Australis|Hercules|Puppis|Auriga|Caelum|Columba|Crux|Horologium|Microscopium|Musca|Reticulum|Sculptor|Scutum|Telescopium|Triangulum|Triangulum Australe|Tucana|Vulpecula|Ursa Major|Ursa Minor".split(
      "|"
    );
    var arrConU = "Apus|Aquarius|Capricornus|Centaurus|Cepheus|Cetus|Circinus|Corvus|Cygnus|Delphinus|Equuleus|Eridanus|Grus|Hydrus|Indus|Lepus|Lupus|Ophiuchus|Pegasus|Perseus|Piscis Austrinus|Sagittarius|Scorpius|Taurus".split(
      "|"
    );
    var arrSinU = "Aries|Bootes|Camelopardalis|Coma Berenices|Corona Borealis|Monoceros|Octans|Pisces|Pyxis|Serpens|Sextans|Volans|Andromeda|Antlia|Ara|Cancer|Canes Venatici|Canis Major|Canis Minor|Carina|Cassiopeia|Crater|Chamaleon|Dorado|Draco|Fornax|Gemini|Hydra|Lacerta|Leo|Leo Minor|Libra|Lynx|Lyra|Mensa|Norma|Orion|Pavo|Phoenix|Pictor|Sagitta|Vela|Virgo".split(
      "|"
    );
    var arrPath = "00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33".split(
      "|"
    );
    dataObj.arr0 = _.sample(arrSinU, 5);
    arrSinU = _.difference(arrSinU, dataObj.arr0);
    dataObj.arr1 = _.sample(arrSinU, 5);
    arrSinU = _.difference(arrSinU, dataObj.arr1);
    dataObj.arr2 = _.sample(arrSinU, 5);
    arrSinU = _.difference(arrSinU, dataObj.arr2);
    var sampleConU = _.sample(arrConU, 3);
    dataObj.i0 = Math.floor(Math.random() * 6);
    dataObj.i1 = Math.floor(Math.random() * 6);
    dataObj.i2 = Math.floor(Math.random() * 6);
    dataObj.arr0.splice(dataObj.i0, 0, sampleConU[0]);
    dataObj.arr1.splice(dataObj.i1, 0, sampleConU[1]);
    dataObj.arr2.splice(dataObj.i2, 0, sampleConU[2]);
    dataObj.i0 = dataObj.i0 === 5 ? 0 : dataObj.i0 + 1;
    dataObj.i1 = dataObj.i1 === 5 ? 0 : dataObj.i1 + 1;
    dataObj.i2 = dataObj.i2 === 5 ? 0 : dataObj.i2 + 1;
    dataObj.arrPth0 = _.sample(arrPath, 6);
    arrPath = _.difference(arrPath, dataObj.arrPth0);
    dataObj.arrPth1 = _.sample(arrPath, 6);
    arrPath = _.difference(arrPath, dataObj.arrPth1);
    dataObj.arrPth2 = _.sample(arrPath, 6);
    arrPath = _.difference(arrPath, dataObj.arrPth2);
    dataObj.cartasMalas = _.sample(arrBaraja, 32);
    dataObj.cartasMalasEsp = _.sample(arrBarajaEsp, 32);
    setDataObj();
  }
  console.debug(dataObj);
  // <<<< * * * * * * * * * * * * DATOS

  // CLICKS * * * * * * * * * * * * >>>>
  $("#barajaesp").click(function() {
    qsObj.esp = true;
    navigateQueryString();
  });
  $("#imgramon").click(function() {
    if (++_contador === 10) {
      _reset();
      window.location.href = window.location.pathname;
    }
  });
  $("ul.constlist").on("click", "li", function() {
    var pag = qsObj.pag;
    if (!pag) {
      pag = "0";
    }
    if (parseInt($(this).attr("data-i")) !== dataObj["i" + pag]) {
      dataObj.err = true;
    }
    qsObj.pag = parseInt(pag) + 1;
    navigateQueryString();
  });
  $("a.link-index").click(function() {
    delete dataObj.err;
    delete dataObj.num;
    qsObj = {};
    navigateQueryString();
  });
  $("#containernum div.alert").click(function() {
    if (typeof dataObj.num === "undefined" || isNaN(parseInt(null))) {
      qsObj.num = $(this).text();
    }
    qsObj.pag = 4;
    navigateQueryString();
  });
  // <<<< * * * * * * * * * * * * CLICKS

  // TEMPLATES * * * * * * * * * * * * >>>>
  // Cabecera
  $(".hidden")
    .hide()
    .removeClass("hidden");
  if (qsObj.esp) {
    $("#titulo").text("Numerología con Baraja Española");
    document.title = "Numerología con Baraja Española";
  } else {
    $("#barajaesp").show();
  }
  $("header").show();

  var tmplConst = _.template(
    '<li data-i="<%=i%>" ><div class="constimg text-center"><img src="img/path<%=path%>.png"></div><div class="consttxt"><%=conste%></div></li>'
  );

  // Página 0
  if (!qsObj.pag) {
    for (i = 0; i < 6; i++) {
      $("#constlist0").append(
        tmplConst({ path: dataObj.arrPth0[i], conste: dataObj.arr0[i], i: i })
      );
    }
    $("#templ0").show();
  }

  // Página 1
  if (qsObj.pag === "1") {
    for (i = 0; i < 6; i++) {
      $("#constlist1").append(
        tmplConst({ path: dataObj.arrPth1[i], conste: dataObj.arr1[i], i: i })
      );
    }
    $("#templ1").show();
  }

  // Página 2
  if (qsObj.pag === "2") {
    for (i = 0; i < 6; i++) {
      $("#constlist2").append(
        tmplConst({ path: dataObj.arrPth2[i], conste: dataObj.arr2[i], i: i })
      );
    }
    $("#templ2").show();
  }

  // Página 3
  if (qsObj.pag === "3") {
    if (dataObj.err) {
      $("#templ3f").show();
    } else {
      $("#templ3").show();
    }
  }

  // Página 4
  if (qsObj.pag === "4") {
    var num = parseInt(qsObj.num);
    $("#spannum").text(num);
    $("#parte0").text(arrNumeros[num]);
    if (typeof dataObj.num === "undefined" || dataObj.num === num) {
      if (num === 0) {
        $("#advertencia")
          .text(
            "Eres persona testaruda y respondes negativamente a todas las preguntas."
          )
          .show();
      }
      if (num === 15) {
        $("#advertencia")
          .text(
            "Eres persona positiva y respondes afirmativamente a todas las preguntas."
          )
          .show();
      }
      $("#resp1").text(
        num % 2 !== 0
          ? "Vivirás muchos años y en la vejez serás una persona muy delgada y muy diminuta."
          : "Vivirás muchos años, pero en la vejez tendrás una enorme barriga."
      );
      $("#resp2").text(
        Math.floor(num / 2) % 2 !== 0
          ? "Para que todo vaya bien, deberás llevar una prenda de tu color favorito, el rojo."
          : "Evita ponerte prendas de ese color que te desagrada, que es el rojo."
      );
      $("#resp4").text(
        Math.floor(num / 4) % 2 !== 0
          ? "Dado que tu ánimo cambia rápidamente, un mago hará un juego de magia y lo disfrutarás en el momento."
          : "Dado que tu ánimo no cambia tan rápidamente, un mago te hará un juego de magia y lo estarás pensando por mucho tiempo."
      );
      $("#resp8").text(
        Math.floor(num / 8) % 2 !== 0
          ? "Así pues, dado que lo haces a menudo, no pienses tanto en la existencia humana."
          : "Así pues, dado que no lo haces, deberías pensar más en la existencia humana."
      );
      $("#tucarta1").text(arrSSP[num]);
      $("#tucarta2").text(arrSSP[num + 1]);
      window.setTimeout(function() {
        dataObj.num = num;
        setDataObj();
      }, 20000);
      $("#tuscartas").show();
    } else {
      if (qsObj.esp) {
        $("#tucarta1").text(dataObj.cartasMalasEsp[num * 2]);
        $("#tucarta2").text(dataObj.cartasMalasEsp[num * 2 + 1]);
      } else {
        $("#tucarta1").text(dataObj.cartasMalas[num * 2]);
        $("#tucarta2").text(dataObj.cartasMalas[num * 2 + 1]);
      }
      $("#tuscartas").show();
    }
    $("#templ4").show();
  }
  // <<<< * * * * * * * * * * * * TEMPLATES
};
