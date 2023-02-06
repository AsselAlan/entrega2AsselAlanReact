import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from './itemListContainer/itemListContainer'
import ItemDetalles from './itemListContainer/itemDetalles/itemDetalles'

import getProducts from '../../getProducts.js'

import './storeContainer.css'


const Store = ({param}) => {
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

  const {idProducto} = useParams()

  return(
    <div className='containerStore'>
      {(param) ? <ItemListContainer productos={productos}/> : <ItemDetalles productos={productos} id={idProducto}/>}
    </div>
  )

}

export default Store