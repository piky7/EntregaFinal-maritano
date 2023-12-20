import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createContext } from "react";
import Swal from "sweetalert2";
import { db } from "../config/firebaseConfig";

export const FireBaseContext = createContext(null);

export const FireBaseContextProvider = ({ children }) => {
  const addOrder = async (datosCarrito, datosUsuario, total) => {
    const newOrder = {
      buyer: datosUsuario,
      items: datosCarrito,
      data: serverTimestamp(),
      total,
    };

    const idOrder = await addDoc(collection(db, "orders"), newOrder);
    Swal.fire({
      title: "Gracias por elegirnos",
      text: `Su id de compra es ${idOrder.id}`,
      icon: "success",
    });
  };

  const objectValue = {
    addOrder,
  };

  return (
    <FireBaseContext.Provider value={objectValue}>
      {children}
    </FireBaseContext.Provider>
  );
};
