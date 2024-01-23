import React from 'react'
import CartWidget from '../CartWidget'
import "Navbar.scss"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Iuris Help</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Inicio</Link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="categorias/Asesorias">Asesorías</link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="categorias/Mediaciones">Mediaciones</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="categorias/Redacciones">Redacciones</Link>
        </li>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>
  )
}

export default Navbar