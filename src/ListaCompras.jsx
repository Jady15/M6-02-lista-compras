import { useState } from "react";
import './ListaCompras.css';

function ListaCompras() {
    // Definir el estado para la lista de compras
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    // Función para agregar un nuevo producto a la lista
    const agregarProducto = () => {
        if (nuevoProducto.trim() !== "") {
            setProductos([...productos, nuevoProducto]);
            setNuevoProducto("");
        }
    };

    // Función para eliminar un producto de la lista
    const eliminarProducto = (index) => {
        setProductos(productos.filter((_, i) => i !== index));
    };

    return (
        <div className="shopping-list-container">
            <h2>Lista de Compras</h2>
            <div className="input-container">
                <input 
                    type="text"
                    value={nuevoProducto}
                    onChange={(e) => setNuevoProducto(e.target.value)} 
                />
                <button onClick={agregarProducto}>Agregar</button>
            </div>
            <ul className="shopping-list"> 
                {productos.map((producto, index) => (
                    <li key={index}>
                        {producto}
                        <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCompras;