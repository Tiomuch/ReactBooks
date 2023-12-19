import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://express-books-janv.onrender.com',
})
