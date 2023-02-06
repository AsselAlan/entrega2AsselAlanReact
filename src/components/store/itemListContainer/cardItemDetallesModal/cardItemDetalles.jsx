import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import './cardItemDetalles.css'

  const CardItemDetalles = ({id, espesificaciones, titulo, imgs, precio, categoria}) => {
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);


  return (
    <>
      <Button onClick={() => setLgShow(true)}>Vista rápida</Button>
      
      <Modal
         size="xl"
         show={lgShow}
         centered
         onHide={() => setLgShow(false)}
         aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body className='d-flex w-100 py-3'>
          <div className='w-50 d-flex'>
            <div className='w-75'>
              <button onClick={handleClose} className='border-0 position-absolute top-0 end-0 m-4 bg-transparent'>
              <svg width="81" height="81" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_13_442)">
                  <path d="M20.4875 -3.89656e-05C31.738 -0.0319962 40.9772 9.15685 41.0001 20.4218C41.0229 31.7187 32.0223 40.8482 20.7809 40.9977C9.37283 41.1506 0.08339 32.0599 6.12654e-05 20.6923C-0.0821259 9.22647 9.06463 0.0319183 20.4875 -3.89656e-05ZM20.548 2.73345C10.7186 2.71747 2.75904 10.644 2.72365 20.4823C2.68827 30.3319 10.6707 38.2608 20.6348 38.2733C30.2392 38.2847 38.2468 30.2715 38.2662 20.6306C38.2856 10.7365 30.3785 2.75057 20.548 2.73459V2.73345Z" fill="#5E16EA"/>
                  <path d="M18.547 20.5039C18.4249 20.375 18.3221 20.2608 18.2125 20.1524C16.401 18.34 14.5895 16.5276 12.7756 14.7163C12.3544 14.2963 12.1969 13.8043 12.3921 13.236C12.569 12.7201 12.9526 12.4188 13.4879 12.3366C13.9925 12.259 14.3954 12.4667 14.7481 12.8217C16.5368 14.617 18.3313 16.4066 20.1223 18.1996C20.233 18.3103 20.33 18.4336 20.4647 18.5865C20.6074 18.4507 20.7193 18.3491 20.8254 18.243C22.6484 16.4214 24.4702 14.5998 26.292 12.776C26.7132 12.3548 27.2086 12.2065 27.7748 12.4051C28.2896 12.5854 28.5853 12.9734 28.664 13.5087C28.7382 14.0143 28.5236 14.4138 28.1698 14.7665C26.3742 16.5549 24.5843 18.3491 22.7899 20.1387C22.6803 20.2483 22.5422 20.3293 22.3927 20.4412C22.5605 20.6204 22.6609 20.7356 22.7682 20.8429C24.5798 22.6554 26.389 24.4712 28.2063 26.2779C28.6263 26.6945 28.8204 27.1693 28.6515 27.7457C28.3547 28.758 27.1321 29.0525 26.3559 28.2901C25.1676 27.1225 23.9965 25.9378 22.8196 24.7588C22.0559 23.9953 21.2934 23.2306 20.5104 22.4465C20.3768 22.572 20.2615 22.6725 20.1542 22.7809C18.3404 24.5922 16.5277 26.4035 14.7162 28.2171C14.2972 28.6371 13.8098 28.8014 13.2379 28.6108C12.7208 28.4373 12.4172 28.0584 12.3304 27.5231C12.2494 27.0175 12.4503 26.6146 12.8065 26.2608C14.6123 24.4632 16.4124 22.6588 18.2148 20.8566C18.3233 20.7482 18.426 20.6341 18.547 20.5062V20.5039Z" fill="#5E16EA"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_13_442">
                  <rect width="41" height="41" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
              </button>
              <h3 className='fs-4 text-uppercase'>{categoria}</h3>
              <img src={imgs.img1} alt="" className=''/>
            </div>
            <div className='w-25 h-75 m-auto d-flex flex-column justify-content-center align-items-center'>
              <img src={imgs.img1} alt="" className='w-75'/>
              <img src={imgs.img2} alt="" className='w-75'/>
              <img src={imgs.img3} alt="" className='w-75'/>
            </div>
          </div>
          <div className='w-50 mt-2 ms-3 '>
              <h3 className='fs-5 mt-5 text-uppercase'>{titulo}</h3>
              <hr />
              <p className='fw-bold my-3'>Especificaciones tecnicas</p>
              <p>Serie :</p>
              <p>${precio}</p>
              <p>Camara tracera: <span className='c-violet'>{espesificaciones.tmp}  mp</span></p>
              <p>Camara delantera: <span className='c-violet'>{espesificaciones.fmp} mp</span></p>
                <p>Pantalla: <span className='c-violet'>{espesificaciones.pantalla}"</span></p>
              <p>Bateria: <span className='c-violet'>{espesificaciones.bateria} mAh</span></p>
              
              <div className='buttonContainer d-flex flex-column my-4'>
                <Link to={`/detalle/${id}`}><button className='my-2 w-50 py-2'>Ver mas</button></Link>
                <button className='my-2 w-50 py-2'>Agregar al carrito</button>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default CardItemDetalles