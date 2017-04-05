let search = {
  templateUrl: 'js/components/search.tp.html',
  controller: ['SearchService', function(SearchService) {
    'use  strict'

    this.results = {};

    this.searchGo = (searchParams) => {
      if (searchParams !== undefined || searchParams !== "") {
        SearchService.search(this.searchParams).then((res) => {
          this.results = res.data.items
        })
      }
    }
  }]
}

export default search
