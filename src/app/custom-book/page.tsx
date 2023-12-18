'use client'
import { Box, Button, Container, IconButton, TextField } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter, useSearchParams } from 'next/navigation'

export default function CustomBook() {
  const router = useRouter()
  const query = useSearchParams()
  // console.log(query.get('id'))
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [text, setText] = useState<string>('')

  const onSaveClick = () => {
    router.back()
  }

  const onTitleChange = (event: any) => {
    setTitle(event.target.value)
  }

  const onAuthorChange = (event: any) => {
    setAuthor(event.target.value)
  }

  const onTextChange = (event: any) => {
    setText(event.target.value)
  }

  const canBeSaved = useMemo(
    () =>
      title.trim().length > 0 &&
      author.trim().length > 0 &&
      text.trim().length > 0,
    [title, author, text],
  )

  useEffect(() => {
    return () => {
      setTitle('')
      setAuthor('')
      setText('')
    }
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
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <IconButton onClick={router.back}>
          <ArrowBackIcon />
        </IconButton>

        <TextField
          id="standard-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          variant="standard"
          onChange={onTitleChange}
        />

        <TextField
          id="standard-multiline-flexible-author"
          label="Author"
          multiline
          maxRows={4}
          variant="standard"
          onChange={onAuthorChange}
        />

        <TextField
          id="standard-multiline-flexible-text"
          label="Text"
          multiline
          maxRows={10}
          variant="standard"
          onChange={onTextChange}
        />

        <Button
          onClick={onSaveClick}
          variant="contained"
          style={{ marginTop: '20px' }}
          disabled={!canBeSaved}
        >
          Save
        </Button>
      </Box>
    </Container>
  )
}
