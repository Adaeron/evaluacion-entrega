import { Producto } from "../../model/Producto"

type ProductoContainerProps = {
    producto: Producto,
    onHandleLike: ((producto: Producto) => void)
}

export const ProductoContainer: React.FC<ProductoContainerProps> = ({ producto, onHandleLike }) => {

    const handleLike = () => {
        onHandleLike(producto);
    }

    return(
        <div>
            <img src={producto.imagen} alt="Imagen del producto" />
            <h5>{producto.nombre}</h5>
            <input type="checkbox" onClick={handleLike}/>
        </div>
    )
}