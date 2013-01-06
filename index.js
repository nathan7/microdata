module.exports = microdata
var lookup = { meta   :'content'
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
             , '*'    :'textContent'
             }

function microdata(itemtype, scope) {
  scope = scope || document.documentElement
  var elems = scope.querySelectorAll('[itemscope][itemtype=' + JSON.stringify(itemtype) + ']')
    , arr = []
  for (var i = 0, len = elems.length; i < len; i++) arr.push(extract(elems[i]))
  return arr
}

microdata.extract = extract
function extract(scope) {
  var obj = {}
    , elems = [].slice.call(scope.childNodes)
    , elem
    , key

  obj._type = scope.getAttribute('itemtype')

  /*jshint boss:true*/
  while (elem = elems.shift()) {
    if (elem.nodeType == elem.TEXT_NODE) continue
    if (key = elem.getAttribute('itemprop')) add(obj, key, value(elem))
    if (elem.getAttribute('itemscope') === null) [].push.apply(elems, elem.children)
  }

  return obj
}

function add(obj, key, val) {
  if (!Object.prototype.hasOwnProperty.call(obj, key)) obj[key] = val
  else {
    var prop = obj[key]
    if (prop instanceof Array) prop.push(val)
    else obj[key] = [prop, val]
  }
}

function value(elem) {
  if (elem.getAttribute('itemscope') !== null) return extract(elem)
  var attr = lookup[elem.tagName.toLowerCase()] || lookup['*']
  return elem[attr] || elem.getAttribute(attr)
}
