import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import NavBar from './components/nav/navBar'
import Store from './components/store/storeContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <Home />
        } />

        <Route path='/store' element={
          <Store param={true}/>
        } />

        <Route path='/detalle/:idProducto' element={
         <Store paramp={false}/>
        }/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
