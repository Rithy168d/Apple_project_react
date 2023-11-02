import { Link, useParams } from "react-router-dom";
import data from "../data/data";
import { MoveLeft } from "lucide-react";

const DetailProduct = () => {
  const { id } = useParams();
  const {
    title,
    image,
    price,
    color,
    display,
    resolution,
    chip,
    ram,
    Battery,
  } = data.find((d) => d.id == id);
  return (
    <article className="detail-page">
      <button className="back-home">
        <Link to="/">
          <MoveLeft />
        </Link>
      </button>
      <div className="grid-1x2">
        <div className="img-detail">
          <img src={image} alt={title} />
        </div>
        <div className="text-detail">
          <p>
            Model : <span>{title}</span>
          </p>
          <p>
            Color : <span>{color}</span>
          </p>
          <p>
            Display : <span>{display}</span>
          </p>
          <p>
            Resolution : <span>{resolution}</span>
          </p>
          <p>
            Chip : <span>{chip}</span>
          </p>
          <p>
            Ram : <span>{ram}</span>
          </p>
          <p>
            Battery : <span>{Battery}</span>
          </p>
          <p>
            Price : <span>{price}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default DetailProduct;
