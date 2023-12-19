'use client'
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRouter } from 'next/navigation'
import { Book, deleteBook, getBooks } from '../../api/books'

export default function Books() {
  const [books, setBooks] = useState<Book[]>([])

  const router = useRouter()

  const onEditClick = (bookId: string) => {
    router.push(`/custom-book?id=${bookId}`)
  }

  const onDeleteClick = async (bookId: string) => {
    await deleteBook(bookId)

    const apiBooks = await getBooks()

    setBooks(apiBooks)
  }

  const onCreateClick = () => {
    router.push('/custom-book')
  }

  useEffect(() => {
    ;(async () => {
      const apiBooks = await getBooks()

      setBooks(apiBooks)
    })()
  }, [])

  return (
    <Container
      maxWidth="xl"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
      }}
    >
      <Button
        onClick={onCreateClick}
        variant="contained"
        style={{ marginTop: '20px' }}
      >
        Add New
      </Button>
      {!!books.length ? (
        <List>
          {books.map(el => (
            <ListItem disablePadding key={el._id}>
              <ListItemButton>
                <ListItemText primary={el.title} />
                <ListItemIcon onClick={() => onEditClick(el?._id ?? '')}>
                  <EditIcon style={{ color: 'blue' }} />
                </ListItemIcon>
                <ListItemIcon onClick={() => onDeleteClick(el?._id ?? '')}>
                  <DeleteIcon style={{ color: 'red' }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography textAlign="center" variant="h3" marginBottom="20px">
          List is empty 🥺. You can add one...
        </Typography>
      )}
    </Container>
  )
}
