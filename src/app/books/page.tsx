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
import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRouter } from 'next/navigation'

const tempList = [
  { title: 'Test1', _id: '1' },
  { title: 'Test2', _id: '2' },
]

export default function Books() {
  const router = useRouter()

  const onEditClick = (bookId: string) => {
    router.push(`/custom-book?id=${bookId}`)
  }

  const onCreateClick = () => {
    router.push('/custom-book')
  }

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
      {!!tempList.length ? (
        <List>
          {tempList.map(el => (
            <ListItem disablePadding key={el._id}>
              <ListItemButton>
                <ListItemText primary={el.title} />
                <ListItemIcon onClick={() => onEditClick(el._id)}>
                  <EditIcon style={{ color: 'blue' }} />
                </ListItemIcon>
                <ListItemIcon>
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
