import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>el carrito esta vacio </h2>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <ul className="lista">
        {carrito.map((producto) => (
          <li className="producto" key={producto.id}>
            <img
              className="imagen"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <p className="texto nombre">{producto.nombre}</p>
            <p className="texto">cantidad: {producto.cantidad}</p>
            <p className="texto">precio c/u: ${producto.precio}</p>
            <FaTrashAlt
              className="borrar"
              onClick={() => borrarProducto(producto.id)}
              size={25}
            />
          </li>
        ))}
      </ul>
      <h3>Total a pagar: ${totalPrecio()}</h3>
      <div className="botones-carrito-borrar" onClick={borrarCarrito}>
        <p>Vaciar carrito</p>
        <FaTrashAlt size={25} />
      </div>
      <Link className="botones-carrito-continuar" to="/checkout">
        <p>Continuar con la compra</p>
      </Link>
    </div>
  );
};
export default Carrito;