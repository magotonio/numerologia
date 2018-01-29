(function() {
  var arrScripts = [];
  var arrCss = [];
  window.app = {};
  /**
   * Cuando se cargan todos los JS, se ejecuta esta función
   */
  function initializer() {
    /** * * * * * * * * * * * * * * * * * * * * * * *
     * I N I T I A L I Z E R
     * * * * * * * * * * * * * * * * * * * * * * * * */
    window.app.load();
  }

  /**
   * Versión de los JS, para evitar el caché
   * @returns {string} La versión
   */
  function noCache() {
    return new Date()
      .getTime()
      .toString(36)
      .toLowerCase();
  }
  /**
   * Versión de los JS, para evitar el caché
   * @returns {string} numero de versión, en texto
   */
  function version() {
    return _appVer;
  }

  /*
      Load jQuery library using plain JavaScript
  */
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function() {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  /**
   * Carga una sola CSS en la cabecera de la página
   * @param {string}url Ruta de la CSS para cargar
   */
  function loadCss(url) {
    /*$("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: url
    }).appendTo("head");*/
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('link');
    s.setAttribute('type', 'text/css');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', url);
    head.appendChild(s);
  }

  /**
   * Carga todos los scripts para la app. El último en cargar llama a "initializer"
   */
  var loadArrScripts = function() {
    if (arrScripts.length > 0) {
      var url = arrScripts[arrScripts.length - 1];
      arrScripts.length--;
      loadScript(url + "?v=" + version(), loadArrScripts);
    } else {
      initializer();
    }
  };

  /**
   * Carga todas la CSS del Array para la app.
   */
  function loadArrCss() {
    if (arrCss.length > 0) {
      var url = arrCss[arrCss.length - 1];
      arrCss.length--;
      loadCss(url + "?v=" + version(), loadCss);
      loadArrCss();
    }
  }
  arrCss.unshift("js/bootstrap-4.0.0-dist/css/bootstrap.min.css");
  arrCss.unshift("css/glowworm.css");
  arrCss.unshift("css/numerologia.css");
  loadArrCss();

  arrScripts.unshift("js/jquery-3.3.1.min.js");
  arrScripts.unshift("js/popper-1.12.9.min.js");
  arrScripts.unshift("js/bootstrap-4.0.0-dist/js/bootstrap.min.js");
  arrScripts.unshift("js/underscore-1.8.3.min.js");
  arrScripts.unshift("js/numerologia.js");
  loadArrScripts();
})();
