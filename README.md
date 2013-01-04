# microdata

  a component for extracting HTML5 microdata in the browser

## Installation

    $ component install nathan7/microdata

or

    $ npm install microdata

## API

microdata(schema)
-----------------
find all the elements with the given itemtype, extracts their data and returns them in an array.
example:
```javascript
microdata('http://data-vocabulary.org/Person')
```
example return value:
```javascript
[{ 
  "_type": "http://data-vocabulary.org/Person",
  "photo": "http://diveintohtml5.info/examples/2000_05_mark.jpg",
  "name": "Mark Pilgrim",
  "title": "Developer advocate",
  "affiliation": "Google, Inc.",
  "address": {             
    "_type": "http://data-vocabulary.org/Address",
    "street-address": "100 Main Street",
    "locality": "Anytown", 
    "region": "PA",        
    "postal-code": "19999",
    "country-name": "USA"
  },            
  "url": ["http://diveintomark.org/", "http://www.google.com/profiles/pilgrim", "http://www.reddit.com/user/MarkPilgrim", "http://www.twitter.com/diveintomark"]
}]
```

microdata.extract(elem)
-----------------------
extract all the microdata from an element. if multiple values are found for a property, it's turned into an array.

## License

  MIT
