import React from 'react'
import './home.css'
import HomePrecentacion from './homePrecentacion/homePrecentacion'
import MasElegidos from './lomaselegido/masElegidosContainer'

import ServicioTecnico from './servicioTecnicoSeccion/servicioTecnico'

const Home = () => {
  return (
    <>
      <HomePrecentacion/>
      <MasElegidos />
      <ServicioTecnico />
    </>
    )
}

export default Home