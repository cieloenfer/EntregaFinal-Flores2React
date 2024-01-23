import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import itemCount from "./itemCount";
import { CartContext } from "../../context/CartContext";

const itemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto } = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoNuevo = {...producto, cantidad: contador }
    añadirProducto(productoNuevo)
    setToggle(true);
  };

  return (
    <div className="item-detail">
      <div className="texto">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        {toggle ? (
          <>
            <Link className="button-terminar" to="/carrito">
              Ir al carrito
            </Link>
            <Link className="button-terminar" to="/">
              Seguir comprando
            </Link>
          </>
        ) : (
          <itemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
      </div>
    </div>
  );
};
export default itemDetail;