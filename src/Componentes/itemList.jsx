import item from "../Componentes/item";

const ItemList = ({productos }) => {
  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
