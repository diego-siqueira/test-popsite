export default ['$http', class SearchService {

    constructor($http) {
        this.$http = $http
    }
    search(params) {
        return this.$http.post('/api/search', params)
    }

}]