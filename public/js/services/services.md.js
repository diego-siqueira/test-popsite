import searchService from './searchService'

let servicesModule = angular.module('app.services', [])
    .service('SearchService', searchService)
    .name

export default servicesModule
