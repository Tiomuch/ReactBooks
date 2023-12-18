import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        color: 'blue',
      }}
    >
      <Typography textAlign="center" variant="h2" marginBottom="20px">
        Welcome, dear friend!
      </Typography>

      <Typography textAlign="center" variant="h3" marginBottom="20px">
        It`s your own library
      </Typography>

      <Typography textAlign="center" variant="h3" marginBottom="20px">
        🥳
      </Typography>
    </Container>
  )
}
