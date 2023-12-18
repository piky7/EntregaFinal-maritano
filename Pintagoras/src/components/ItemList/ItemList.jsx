import { Item } from "../Item/Item";

export const ItemList = ({ arrayDeMates }) => {
  return (
    <>
      <div className="d-flex flex-wrap">
        {arrayDeMates.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
