import axios from 'axios'
import config from './config'

export default {
  getPost () {
    return axios.get(config.apiUrl + 'posts')
        .then(response => {
          return response.data
        })
        .catch(e => {
          console.log(e)
        })
  }
}
