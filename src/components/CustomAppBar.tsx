'use client'
import React from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useRouter } from 'next/navigation'

const pages = [
  { title: 'Main', link: '/' },
  { title: 'Book List', link: '/books' },
]

export const CustomAppBar = () => {
  const router = useRouter()

  const handleNavigate = (link: string) => {
    router.push(link)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AssignmentIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Your own library
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: 50,
            }}
          >
            {pages.map(page => (
              <Button
                key={page.title}
                onClick={handleNavigate.bind(null, page.link)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  borderColor: 'white',
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
