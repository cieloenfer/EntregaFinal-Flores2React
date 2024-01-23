import { splitVendorChunk } from "vite";

const productos= [
{
  id:"1",
  nombre:"Asesoria",
  descripción:"Asesoría legal", 
  stock: 1,
  precio: 20.000,
  categoria:"Asesoria",
},

{
    id:"2",
  nombre:"Mediaciones",
  descripción:"Mediaciones Laborales,Familiares y escolares", 
  stock:5,
  precio: 60.000,
  categoria:"Mediaciones"
},

{
    id:"3",
  nombre:"redacciones",
  descripción:"redaccion de escritos", 
  stock: 8,
  precio: 10.000,
  categoria:"redacciones"
},




]

const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);

    }, 2000);
});

export default obtenerProductos

