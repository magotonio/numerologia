//https://upload.wikimedia.org/wikipedia/commons/5/57/Anglosaxonrunes.svg
function _reset() {
  localStorage.setItem("numerologia", "{}");
}
//Coloca en una mesa una baraja y sigue estas instrucciones.
$(function() {
  var ver = "0.1";
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
    window.location.href = "index.html?" + strQs;
  };

  // DATOS * * * * * * * * * * * * >>>>
  var dataObj = localStorage.getItem("numerologia");
  var setDataObj = function() {
    localStorage.setItem("numerologia", JSON.stringify(dataObj));
  };
  if (dataObj) {
    dataObj = JSON.parse(dataObj);
  } else {
    dataObj = {};
  }
  if (dataObj.ver !== ver) {
    dataObj = {};
  }
  if (!dataObj.ver) {
    dataObj.ver = ver;
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
    setDataObj();
  }
  console.debug(dataObj);
  // <<<< * * * * * * * * * * * * DATOS

  // CLICKS * * * * * * * * * * * * >>>>
  $("#barajaesp").click(function() {
    qsObj.esp = true;
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

  // Página 0
  if (!qsObj.pag) {
    $("#templ0").show();
  }
  // <<<< * * * * * * * * * * * * TEMPLATES
});
