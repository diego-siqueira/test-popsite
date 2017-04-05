module.exports = {
    "development": {
        db: process.env.MONGODB_URI ||  'mongodb://localhost:27017/search-app'
    },
    "production": {
        db: process.env.MONGODB_URI ||  'mongodb://localhost:27017/search-app'
    }
}
