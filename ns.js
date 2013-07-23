(function() {
  var ns;

  ns = function(path, source) {
    var nsPath, obj;
    path = path.split(/[\[\]\.]+/);
    obj = window;
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
