import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Item = ({ name, description, id, img }) => {
  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`}>
            <Button variant="outlined">Detalles</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
