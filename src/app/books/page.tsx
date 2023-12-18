import {
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Pagination,
  PaginationItem,
} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const tempList = [
  { title: 'Test1', _id: '1' },
  { title: 'Test2', _id: '2' },
]

export default function Books() {
  // const [page, setPage] = React.useState(1)
  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setPage(value)
  // }

  return (
    <Container
      maxWidth="xl"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
      }}
    >
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Search</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <List>
        {tempList.map(el => (
          <ListItem disablePadding key={el._id}>
            <ListItemButton>
              <ListItemText primary={el.title} />
              <ListItemIcon>
                <EditIcon style={{ color: 'blue' }} />
              </ListItemIcon>
              <ListItemIcon>
                <DeleteIcon style={{ color: 'red' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Pagination size="large" count={10} hidePrevButton hideNextButton />
    </Container>
  )
}
