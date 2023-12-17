import {addDoc,collection} from "firebase/firestore"
import { db } from "../config/firebaseConfig"


const productos = [
    {img : '../src/assets/marmol.jpg'  ,precio: '$3000',name : 'Mate marmolado',categoria: 'Formas' , description : 'Mate azul y blanco', stock :'2'},
    {img : '../src/assets/harrypotter.jpg' ,precio: '$3000',name : 'Mate Harry Potter',categoria: 'Personalizado' , description : 'Mate Ravenclaw', stock :'3'},
    {img : '../src/assets/floralv.jpg' ,precio: '$3000',name : 'Mate flores',categoria: 'Floral' , description : 'Mate verde floreado', stock :'4'},
    {img : '../src/assets/geometrico.jpg' ,precio: '$3000',name : 'Mate geometrico',categoria: 'Formas' , description : 'Mate figuras geometricas', stock :'1'},
    {img : '../src/assets/floralb.jpg' ,precio: '$3000',name : 'Mate flores',categoria: 'Floral' , description : 'Mate blanco floreado', stock :'1'},
  ]

export const seedProducts = () => {

    productos.forEach(product =>{
        addDoc(collection(db,"ProductosPintagoras"),product)
    })

} 