'use strict'

let GoogleSearch = require('google-search');
let googleSearch = new GoogleSearch({
  key: 'AIzaSyAC9hDVYfFr0MKqadkMaTRpLBqXHwnwTSY',
  cx: '003025254832580724384:p2fxvifxfti'
});

class SearchController {


  constructor() {

  }

  search(req, res) {
    let site = req.body;
    console.log('params', site.keywords)
    googleSearch.build({
      q:"'" + site.site.toString() + "' " + site.keywords.toString(), //site.keywords,
      start: 5,
      gl: "fr", //geolocation, 
      lr: "lang_fr",
      num: 9, // Number of search results to return
      //siteSearch: site.site.toString() // Restricts results to URLs from a specified site 
    }, function(error, response) {
      if (error)
        next(error)
      else
        //console.log(response);
        res.send(response);
    });

  }
}

module.exports = SearchController
