import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../../context/CartContext";

export const CartLogo = () => {
  const { totalCantidad, carrito } = useContext(CartContext);

  const valorInicial = 0;
  const totalProductos = totalCantidad;

  return (
    <div>
      <h2>
        {" "}
        <AiOutlineShoppingCart />{" "}
        {carrito.length > 0 ? totalProductos : valorInicial}{" "}
      </h2>
    </div>
  );
};
