function _require(name, user) {
  try {
    return require(name)
  }
  catch(e) {
    return require((user || 'component') + '-' + name)
  }
}

var microdata = _require('microdata', 'nathan7')
  , _ = _require('underscore')
  , assert = _require('assert')

var result = microdata('http://data-vocabulary.org/Person')
  , expected = [{ _type: "http://data-vocabulary.org/Person"
                , photo: "http://diveintohtml5.info/examples/2000_05_mark.jpg"
                , name: "Mark Pilgrim"
                , title: "Developer advocate"
                , affiliation: "Google, Inc."
                , address: { _type: "http://data-vocabulary.org/Address"
                           , "street-address": "100 Main Street"
                           , locality: "Anytown"
                           , region: "PA"
                           , "postal-code": "19999"
                           , "country-name": "USA"
                           }
                , url: ["http://diveintomark.org/", "http://www.google.com/profiles/pilgrim", "http://www.reddit.com/user/MarkPilgrim", "http://www.twitter.com/diveintomark"]
                }]

var success = false
  , e

try {
  assert(_.isEqual(result, expected))
  success = true
}
catch(e_) {
  e = e_
  success = false
}

var elem = document.createElement('h1')
elem.textContent = 'tests ' + (success ? 'succeeded' : 'failed')
elem.style.color = success ? 'green' : 'red'
document.body.insertBefore(elem, document.body.firstChild)
