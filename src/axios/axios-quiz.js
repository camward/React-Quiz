import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-241a2.firebaseio.com/'
})