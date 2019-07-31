let apiUrl
const expressPort = 3003
const apiUrls = {
  production: 'https://mosque-finder.herokuapp.com',
  development: `http://localhost:${expressPort}`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
