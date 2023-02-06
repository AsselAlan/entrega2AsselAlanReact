import React, { useEffect, useState } from 'react'
import CardElegidos from './cardElegidos/cardElegidos'
import './masElegidosContainer.css'

import getProducts from "../../../getProducts"




const MasElegidos = () => {
  const [productos, setProductos] = useState([])
   
  useEffect(()=>{
    getProducts()
        .then((resProductos)=>{
          setProductos(resProductos)
        })
        .catch((error)=>{
          error.log("Error al obtener los productos")
        })
  },[])
    
  return (
    <div className='containerHomeMasElegidos'>
       <h2>Lo <span>mas</span> elegido</h2>
       <div className='conteinerCardElegidos'>
       {productos.map((elem)=>{
        return <CardElegidos titulo={elem.nombre} imgs={elem.imgs} precio={elem.precio} categoria={elem.categoria}/>
      })}
       </div>
    </div>
  )
}

export default MasElegidos