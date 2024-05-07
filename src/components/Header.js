import { 
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  makeStyles
} from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const useStyle = makeStyles(() => ({
  title:{
    flex:1,
    color:'gold',
    fontFamily:'Montserrat',
    fontWeight:'bold',
    cursor:'pointer'
  }
}))


function Header() {
  const classes = useStyle()
  const navigate = useNavigate()
  const { currency, setCurrency } = CryptoState()

  const darkTheme = createTheme({
    palette:{
      primary:{
        main:"#fff"
      },
      type:"dark"
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={() => navigate('/')} className={classes.title} variant='h5'>CryptoHunter</Typography>

            <Select 
              variant='outlined'
              style={{
                width:100,
                height:40,
                marginRight:15,
                color:'white'
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'USR'}>USR</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
              <MenuItem value={'FRA'}>FRA</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header