import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const ItemDetailConteiner = () => {
  const { id } = useParams();
  const [item, setitem] = useState(null);

  useEffect(() => {
    const myProducts = query(collection(db, "ProductosPintagoras"));

    getDocs(myProducts)
      .then((resp) => {
        const productList = resp.docs.map((doc) => {
          const producto = {
            id: doc.id,
            ...doc.data(),
          };
          return producto;
        });

        const productFilter = productList.find((p) => p.id === id);

        if (!productFilter) {
          console.log("No se encuentra");
        } else {
          setitem(productFilter);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return <>{item && <ItemDetail {...item} />}</>;
};
