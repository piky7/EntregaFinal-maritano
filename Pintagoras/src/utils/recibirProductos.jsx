// import { collection, getDocs, query } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { db } from "../config/firebaseConfig"


// export const RecibirProductos = () => {

//     const [productos, setProductos] = useState([])

//     useEffect(()=>{
//         const myProducts = query(collection (db,"ProductosPintagoras"))

//         getDocs(myProducts)
//         .then((resp) => {
//             const productList = resp.docs.map(doc=>{
//                 const producto = {
//                     id = doc.id,
//                     ...doc.data()
//                 }
//                 return producto

//             })
//             setProductos(productList)
//         })
//         .catch(error)
//     },[])

//   return (
//     <div>recibirProductos</div>
//   )
// }
