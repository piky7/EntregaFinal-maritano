import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCart = ({ name, description, quantity, subTotal, id }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="border m-2 ">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"> {description} </p>
          <strong>Cantidad {quantity}</strong>
          <hr />
          <strong>SubTotal ${subTotal}</strong>
          <hr />
          <div>
            <Button
              onClick={() => removeItem(id)}
              variant="contained"
              color="error"
            >
              Eliminar del carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
