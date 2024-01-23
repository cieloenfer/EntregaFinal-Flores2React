import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import itemDetail from './itemDetail'
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

const itemDetailContainer = () => {

const [producto, setProducto] = useState()
const [productoExiste, setProductoExiste] = useState(false);
const {id} = useParams()

useEffect(() =>{
      const productoEncontrado = doc(db, "productos", id);
      getDoc(productoRef).then((respuesta) => {
        const productoDb = { id: respuesta.id, ...respuesta.data() };
  
        if (!respuesta.exists()) {
          setProductoExiste(true);
        }
        setProducto(productoDb);
      });
    }, [id]);
  
    return (
      <div>
        {productoExiste ? (
          <div>Producto no existe</div>
        ) : (
          <itemDetail producto={producto} />
        )}
      </div>
    );
        }
     export default itemDetailContainer


