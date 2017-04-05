import search from './search'

let searchModule = angular.module('app.search', [])
  .component('search', search)
  .config(['$stateProvider', ($stateProvider) => {

    $stateProvider
      .state('app.search', {
        url: '/search',
        abstract: true
      })
  }])
  .name

export default searchModule
