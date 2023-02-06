import React, { useState } from "react"

import './itemDetalles.css'

const ItemDetalles = ({id,productos}) =>{
    
let product = productos.find(product => {return product.id === id})

return(
    <div className="itemDetalleContainer d-flex justify-content-center">
        <div className="cardDetalles d-flex">
            <div className="w-50 d-flex">
                <div className="w-25 d-flex flex-column">
                    <img src={product.imgs.img1} alt=""/>
                    <img src={product.imgs.img2} alt=""/>
                    <img src={product.imgs.img3} alt=""/>
                </div>
                <div className="w-75">
                    <img src={product.imgs.img1} alt=""/>
                </div>
            </div> 
            <div className="w-50">
                <div className="w-50">
                    <h2>{product.nombre}</h2>
                    <p>${product.precio}</p>
                    <p className='fw-bold my-3'>Especificaciones tecnicas</p>
                    <p>Serie :</p>
                    <p>Camara tracera: {product.espesificaciones.tmp}  mp</p>
                    <p>Camara delantera: {product.espesificaciones.fmp} mp</p>
                    <p>Pantalla: {product.espesificaciones.pantalla}"</p>
                    <p>Bateria: {product.espesificaciones.bateria} mAh</p>
                </div>
                <div className="w-50">

                </div>
            </div>
        </div>
    </div>
)
}

export default ItemDetalles 