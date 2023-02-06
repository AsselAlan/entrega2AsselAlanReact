import React from 'react'
import './buttonSearch.css'

const ButtonSearch = () => {

  return (
    <form className="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required/>
        <button className="btnSearch" type="submit">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0536 20.7211C13.7364 25.032 6.29343 23.7376 2.47358 18.8675C-1.14852 14.2488 -0.759808 7.55053 3.42342 3.41002C7.69628 -0.819128 14.3316 -1.15419 19.0253 2.62691C23.7921 6.46646 24.968 13.8037 20.7146 19.0584C20.8032 19.151 20.8919 19.2474 20.9844 19.3399C23.1764 21.5314 25.3664 23.7239 27.5623 25.9116C27.8857 26.234 28.0649 26.5982 27.9782 27.056C27.8126 27.9219 26.7848 28.292 26.099 27.7378C25.9957 27.6541 25.9042 27.5547 25.8097 27.4602C23.6518 25.3038 21.4939 23.1464 19.3361 20.9899C19.2435 20.8974 19.1461 20.8078 19.0536 20.7201V20.7211ZM11.6779 2.33569C6.5399 2.32595 2.34108 6.4986 2.32257 11.6316C2.30406 16.7822 6.49119 20.9928 11.6408 21.0026C16.7778 21.0123 20.9776 16.8387 20.9971 11.7047C21.0166 6.55509 16.8294 2.34445 11.6779 2.33471V2.33569Z" fill="white"/>
          </svg>
        </button>
    </form>
  )
}

export default ButtonSearch