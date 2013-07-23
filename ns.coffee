ns = () ->
    globalDeclared = typeof arguments[0] is "boolean" or typeof arguments[0] is "object"
    useGlobal = not globalDeclared or arguments[0] is false 
    path = not globalDeclared and arguments[0] or arguments[1]
    source = not globalDeclared and arguments[1] or arguments[2]

    if useGlobal
        obj =  window
    else 
        obj = typeof arguments[0] is "object" and arguments[0] or (window.___ =  window.___ or {})

    path = path.split(/[\[\]\.]+/)
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