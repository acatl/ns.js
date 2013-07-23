(function() {
  var ns;

  ns = function() {
    var globalDeclared, nsPath, obj, path, source, useGlobal;
    globalDeclared = typeof arguments[0] === "boolean" || typeof arguments[0] === "object";
    useGlobal = !globalDeclared || arguments[0] === false;
    path = !globalDeclared && arguments[0] || arguments[1];
    source = !globalDeclared && arguments[1] || arguments[2];
    if (useGlobal) {
      obj = window;
    } else {
      obj = typeof arguments[0] === "object" && arguments[0] || (window.___ = window.___ || {});
    }
    path = path.split(/[\[\]\.]+/);
    if (path[path.length - 1] === "") {
      path.pop();
    }
    if (typeof source === "undefined") {
      while (path.length && (obj = obj[path.shift()])) {}
    } else {
      while (path.length) {
        nsPath = path.shift();
        obj = obj[nsPath] || (path.length === 0 && (obj[nsPath] = source)) || (obj[nsPath] = {});
      }
    }
    return obj;
  };

  this.ns = ns;

}).call(this);
