import routes from './routes'

let configModule = angular.module('search.config', [])
    .config(routes)
    .name

export default configModule
