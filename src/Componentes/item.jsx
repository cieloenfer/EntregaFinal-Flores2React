import { Link } from "react-router-dom";


const item = ({producto}) =>{
    return(
        <li>
            <ul className="título"></ul>
            <ul className="precio"></ul>
            <Link to={`/detalle/${producto.id}`} className="link">ver detalles</Link>
        </li>
    );
};

export default item; 


