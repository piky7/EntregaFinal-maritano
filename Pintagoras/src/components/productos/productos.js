const productos = [
  {id :'1',img : '../src/assets/marmol.jpg'  ,precio: '$3000',name : 'Mate marmolado',categoria: 'Formas' , description : 'Mate azul y blanco', stock :'2'},
  {id :'2',img : '../src/assets/harrypotter.jpg' ,precio: '$3000',name : 'Mate Harry Potter',categoria: 'Personalizado' , description : 'Mate Ravenclaw', stock :'3'},
  {id :'3',img : '../src/assets/floralv.jpg' ,precio: '$3000',name : 'Mate flores',categoria: 'Floral' , description : 'Mate verde floreado', stock :'4'},
  {id :'4',img : '../src/assets/geometrico.jpg' ,precio: '$3000',name : 'Mate geometrico',categoria: 'Formas' , description : 'Mate figuras geometricas', stock :'1'},
  {id :'5',img : '../src/assets/floralb.jpg' ,precio: '$3000',name : 'Mate flores',categoria: 'Floral' , description : 'Mate blanco floreado', stock :'1'},
]

export const getProducts = () => {
    return new Promise ((resolve,reject)=>{

      if(productos.length > 0){
        setTimeout(()=>{
            resolve(productos)
        },2000)
      } else {
        reject('No hay productos en la base de datos')
      }

    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (productos.length > 0) {
        const product = productos.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };