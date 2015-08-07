module.exports = microdata
var lookup = { '*'    :'textContent'
             , meta   :'content'
             , audio  :'src'
             , embed  :'src'
             , iframe :'src'
             , img    :'src'
             , source :'src'
             , video  :'src'
             , a      :'href'
             , area   :'href'
             , link   :'href'
             , object :'data'
             , time   :'datetime'
             }

var query = require('component-query').all

function microdata(itemtype, scope) {
  scope = scope || document.documentElement
  var elems = query('[itemscope][itemtype="' + itemtype + '"]', scope)
    , arr = []
  for (var i = 0, len = elems.length; i < len; i++) arr.push(extract(elems[i]))
  return arr
}

microdata.extract = extract
function extract(scope) {
  var obj = { _type: scope.getAttribute('itemtype') }
    , elems = [].slice.call(scope.children)
    , elem
    , key

  /*jshint boss:true*/
  while (elem = elems.shift()) {
    if (key = elem.getAttribute('itemprop')) add(obj, key, value(elem))
    if (elem.getAttribute('itemscope') === null) prepend(elems, elem.children)
  }

  return obj
}

function add(obj, key, val) {
  /*jshint eqnull:true*/
  if (val == null) return

  var prop = obj[key]
  if (prop == null)
    obj[key] = val
  else
    if (prop instanceof Array) prop.push(val)
    else obj[key] = [prop, val]
}

function value(elem) {
  if (elem.getAttribute('itemscope') !== null) return extract(elem)
  var attr = lookup[elem.tagName.toLowerCase()] || lookup['*']
  return elem[attr] || elem.getAttribute(attr)
}

function prepend(target, addition) {
  [].unshift.apply(target, [].slice.call(addition))
}
