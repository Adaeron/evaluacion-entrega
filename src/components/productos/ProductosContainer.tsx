import { Producto } from "../../model/Producto"
import { ProductoContainer } from "./ProductoContainer"

type ProductosContainerProps = {
    productos: Producto[],
    onHandleLike: ((producto: Producto) => void)
}

export const ProductosContainer: React.FC<ProductosContainerProps> = ({ productos, onHandleLike }) => {

    return (
        <div className="productos-container">
            {
                productos.map((producto) => 
                    <ProductoContainer key={producto.nombre} producto={producto} onHandleLike={onHandleLike}/>
                )
            }
        </div>
    )
}