import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3004/notificacoes',
})

export default api
