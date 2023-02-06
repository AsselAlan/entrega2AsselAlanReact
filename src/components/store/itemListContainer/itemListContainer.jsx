import React, { useEffect, useState } from 'react'
import CategoriasContainer from '../categoriasContainer/categoriasContainer'
import CardItem from './cardItem/cardItem'
import './itemListContainer.css'




const ItemListContainer = ({productos}) => {

  return (
    <>
      <CategoriasContainer />
      <div className='itemsContainer'>
      {productos.map((elem)=>{
        return <CardItem categoria={elem.categoria} espesificaciones={elem.espesificaciones} id={elem.id} titulo={elem.nombre} imgs={elem.imgs} precio={elem.precio} descripcion={elem.descripcion}/>
      })}
      </div>
    </>
    
  )
}

export default ItemListContainer