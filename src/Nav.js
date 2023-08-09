import React from 'react'
/*rfcs importa el codigo pre determinado*/
function Nav(parametros) {
    
    /*if else*/
  return (
    <nav className="flex gap-4">
        <a href="#">{parametros.nombre}</a>
        <a href="#">{parametros.edad}</a>
        <a href="#">link</a>
    </nav>
  )
}

export default Nav
