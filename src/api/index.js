import axios from 'axios'
import config from './config'
let _ = require('lodash')

export default {
  getPost (limit) {
    if (_.isEmpty(limit)) {
      limit.limit = 1
    }
    console.log(limit)
    return axios.get(config.apiUrl + 'posts?per_page=' + limit.limit)
        .then(response => {
          return response.data
        })
        .catch(e => {
          console.log(e)
        })
  }
}
