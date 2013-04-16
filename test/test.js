it('should find Mark Pilgrim', function() {
  expect(microdata('http://data-vocabulary.org/Person')).to.deep.equal(
    [{ _type: "http://data-vocabulary.org/Person"
     , photo: "http://diveintohtml5.info/examples/2000_05_mark.jpg"
     , name: "Mark Pilgrim"
     , title: "Developer advocate"
     , affiliation: ["Google, Inc.", "O'Reilly"]
     , address: [{ _type: "http://data-vocabulary.org/Address"
                 , "street-address": "P.O. Box 562"
                 , locality: "Anytown"
                 , region: "PA"
                 , "postal-code": "12345"
                 , "country-name": "USA"
                 }
                ,{ _type: "http://data-vocabulary.org/Address"
                 , "street-address": "100 Main Street"
                 , locality: "Anytown"
                 , region: "PA"
                 , "postal-code": "19999"
                 , "country-name": "USA"
                 }
                ]
     , url: ["http://www.google.com/profiles/pilgrim", "http://www.reddit.com/user/MarkPilgrim", "http://www.twitter.com/diveintomark"]
     }])
})
