import { useState } from 'react'
import './App.css'
import { AlmacenNavbar } from './components/navbar/AlmacenNavbar'
import { Producto } from './model/Producto';
import { ProductosContainer } from './components/productos/ProductosContainer';

const ListaProductos: Producto[] = [
  {
    nombre: "bicicleta",
    imagen: "/img/bicicleta.png",
    liked: false
  },
  {
    nombre: "juguera",
    imagen: "/img/juguera.png",
    liked: false
  },
  {
    nombre: "notebook",
    imagen: "/img/notebook.webp",
    liked: false
  },
  {
    nombre: "pelota",
    imagen: "/img/pelota.jpeg",
    liked: false
  }
]

function App() {
  const [productos, setProductos] = useState([...ListaProductos]);

  const handleLike = (producto: Producto) => {
    producto.liked = !producto.liked;
    setProductos([...productos]);
  }

  return (
    <>
      <AlmacenNavbar />
      <ProductosContainer productos={productos} onHandleLike={handleLike}/>
    </>
  )
}

export default App
