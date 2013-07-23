ns = (path, source) ->
    path = path.split(/[\[\]\.]+/)
    obj = window
    path.pop()  if path[path.length - 1] is ""

    if typeof source is "undefined"
        while path.length and (obj = obj[path.shift()])
            ;
    else
        while path.length
            nsPath = path.shift()
            obj = obj[nsPath] or (path.length is 0 && (obj[nsPath] = source)) or (obj[nsPath] = {})
            
    obj

this.ns = ns