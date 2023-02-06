import React from 'react'
import './cardElegidos.css'

const CardElegidos = ({titulo, imgs, precio, categoria}) => {
  return (
    <div className='cardElegidos'>
        <div className='cardMargin'>
           <h3>{categoria}</h3>
        </div>
        <div  className='carBody'>
            <div className='cardHeader'>
                   <h3>{titulo}</h3>
            </div>
             <img src={imgs.img1} alt="" />
            <div className='cardFooter'>
                <span>${precio}</span>
                <button>MÁS VENDIDO</button>
                <div className='cardClasificacion'>
                    <svg width="19" height="17" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#5E16EA"/>
                    </svg>
                    <svg width="19" height="17" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#5E16EA"/>
                    </svg>
                    <svg width="19" height="17" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#5E16EA"/>
                    </svg>
                    <svg width="19" height="17" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#5E16EA"/>
                    </svg>
                    <svg width="19" height="17" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#C4C1C1"/>
                    </svg>
                </div>
            </div>  
        </div>
    </div>
    )
}

export default CardElegidos