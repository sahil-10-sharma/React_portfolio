const withImages = require('next-images')
module.exports = withImages()

module.exports = {
    env: {
      "DEV_API_URL": "https://portfolio-server34.herokuapp.com/",
      "PRODUCTION_API_URL": "https://www.api.example.com"
    }
  }