import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({
  id,
  precio,
  name,
  stock,
  initial = 1,
  description,
}) => {
  const { addItem } = useContext(CartContext);
  const [count, setcount] = useState(initial);

  const itemDetallado = {
    id,
    name,
    precio,
    description,
    quantity: count,
    subTotal: count * precio,
  };

  const incrementar = () => {
    if (count < stock) {
      return setcount(count + 1);
    } else {
      setcount(count);
    }
  };

  const decrementar = () => {
    if (count === 0) {
      return setcount(0);
    } else {
      setcount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center p-4">
      <div>
        <button
          className="btn btn-outline-secondary mx-3"
          onClick={decrementar}
        >
          -
        </button>
        <strong>{count}</strong>

        <button
          className="btn btn-outline-secondary mx-3"
          onClick={incrementar}
        >
          +
        </button>
      </div>

      {count !== 0 ? (
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => addItem((count, itemDetallado), count)}
        >
          Agregar al carrito
        </button>
      ) : (
        "Seleccione una o mas cantidad"
      )}
    </div>
  );
};
