import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Coins from './Pages/Coins' 
import { makeStyles } from '@material-ui/core';

function App() {

  const uesStyles = makeStyles(() => ({
    App:{
      backgroundColor: '#14161a',
      color:'white',
      minHeight:'100vh'
    }
  }))

  const classes = uesStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/coins/:id' element={<Coins/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
