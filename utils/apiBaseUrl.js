let apiBaseUrl

if (process.env.NODE_ENV === "production") {
  apiBaseUrl = process.env.DEV_API_URL
} else {
  apiBaseUrl = process.env.PRODUCTION_API_URL
}

export default apiBaseUrl
