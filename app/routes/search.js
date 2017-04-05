'use strict'
let SearchController = require('../controllers/SearchController')
let express = require('express')

let GoogleSearch = require('google-search');
let googleSearch = new GoogleSearch({
  key: 'AIzaSyDyJVdUoSw-CcO9Hr3VHb9zhbGFlsGyIeI',
  cx: '016853003454047890766:gkt4vw6swxe'
});

module.exports = (app) => {

    let ctrl = new SearchController();

    app.post('/search', (req, res) => {
        return ctrl.search(req, res)
    })

    return app

}
