

export const Card = ({titulo,descripcion}) => {
    return (
      <div className="border border-1 border-dark rounded-3 col-5 p-3 m-2">
          <h5>{titulo}</h5>
          <p>{descripcion}</p>
          <button className="btn btn-primary">Detalles</button>
      </div>
    )
  }
  