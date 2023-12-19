import { api } from './index'

export type Book = {
  title: string
  author: string
  text: string
  _id?: string
}

export const getBooks = async () => {
  try {
    const { data } = await api.get('/books')

    return data
  } catch (error) {
    alert(`Oops, we have an error`)

    return []
  }
}

export const getBookById = async (id: string) => {
  try {
    const { data } = await api.get(`/books/${id}`)

    return data
  } catch (error) {
    alert(`Oops, we have an error`)

    return null
  }
}

export const createBook = async (payload: Book) => {
  try {
    await api.post(`/books`, payload)
  } catch (error) {
    alert(`Oops, we have an error`)
  }
}

export const updateBook = async (payload: Book) => {
  try {
    await api.patch(`/books/${payload._id}`, payload)
  } catch (error) {
    alert(`Oops, we have an error`)
  }
}

export const deleteBook = async (id: string) => {
  try {
    await api.delete(`/books/${id}`)
  } catch (error) {
    alert(`Oops, we have an error`)
  }
}
