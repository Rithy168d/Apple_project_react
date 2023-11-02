import { Link } from "react-router-dom";
const Card = ({ products }) => {
  return (
    <>
      {products.map(({ id, image, title, price }) => (
        <article key={id} className="card-contaner">
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
          <h3 className="card-title">{title}</h3>
          <div className="card-detail">
            <h3 className="card-price">{price}</h3>
            <Link to={id.toString()} className="btn-detail">Detail</Link>
          </div>
        </article>
      ))}
    </>
  );
};

export default Card;
