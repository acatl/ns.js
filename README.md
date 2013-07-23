# ns.js 
> "simple javascript namespacing"

By default any namespace will be attached to the window object, to overrride this
plase read **'obscure namepsace'**

Create a namespace and its object:

```js
var obj = ns("com.app.someVar", 254);
// obj = 254
```

get a namespace path:

```js
var obj = ns("com.app.someVar") // already created
// obj === 254

var objError = ns("com.app.someOtherVar") // does not exists
// objError === undefined
```

### obscure namepsace

if you wish NOT to attach a namespace to window and obscure it from being global
you may pass as a first parameter 'true' or an exisitng object, your objects will get attached to a
variable under `window.___` by default or to the object passed -- _if you know of a better way, fork and send pull request_

passing true:
```js
var obj = ns(true, "obscured.namespace", 1);
// window.obscured === undefined
// window.___.obscured === [obj]
```

passing an object:
```js
// be sure the object you pass actually exists if not create it
window.mynamespace = window.mynamespace || {};

// ON GLOBAL NAMESPACE
var obj = ns(window.mynamespace, "custom.namespace", 1);
// window.custom === undefined
// window.mynamespace.custom === [obj]
// obj === 1

// OR LOCAL NAMESPACE
var local = {}; 
var obj = ns(local, "custom.namespace", 1);
// window.local === undefined
// local.custom === [obj]
// obj === 1
```





