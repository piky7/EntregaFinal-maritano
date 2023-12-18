import { Box, Button, Stack, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCart } from "../itemCart/ItemCart";
import { FireBaseContext } from "../../context/FireBaseContext";


export const Cart = () => {
  const { carrito, setCarrito } = useContext(CartContext);
  const { addOrder } = useContext(FireBaseContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");

  const totalCompra = carrito.map((producto) => producto.subTotal);

  const handleForm = (e) => {
    e.preventDefault();
    addOrder(
      carrito,
      { nombre, apellido, mail },
      totalCompra.reduce(function (a, b) {
        return a + b;
      })
    );
    setNombre("");
    setApellido("");
    setMail("");
    setCarrito([]);
  };

  return (
    <>
      <h2 className="m-2">Carrito de compras</h2>

      <div className="d-flex flex-wrap">
        {carrito.map((product) => (
          <ItemCart key={product.id} {...product} />
        ))}
      </div>

      <div className="m-2">
        <h3>
          Total: $
          {totalCompra.length > 0
            ? totalCompra.reduce(function (a, b) {
                return a + b;
              })
            : 0}
        </h3>
      </div>

      <hr />

      {totalCompra.length > 0 && (
        <div className="d-flex flex-column m-2 ">
          <h2>Finalizar compra</h2>

          <Box
            direction="row"
            justifyContent="start"
            alignItems="flex-start"
            width={1000}
            m={2}
            component="form"
            onSubmit={handleForm}
          >
            <TextField
              id="outlined-basic"
              value={nombre}
              label="Nombre"
              variant="outlined"
              onChange={(e) => setNombre(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              value={apellido}
              label="Apellido"
              variant="outlined"
              onChange={(e) => setApellido(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              value={mail}
              type="email"
              label="Email"
              variant="outlined"
              onChange={(e) => setMail(e.target.value)}
            />

            <div className="mt-3">
              <Button type="submit" variant="contained" color="success">
                Comprar
              </Button>
            </div>
          </Box>
        </div>
      )}
    </>
  );
};
