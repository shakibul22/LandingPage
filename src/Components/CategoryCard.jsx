import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CategoryCard = ({ id, model, image, manufacturer }) => {
    console.log(id);
    return (
      <div className="card  glass">
      <figure><img className="w-full" src={image} alt="car!"/></figure>
      <div className="card-body">
       <div className="flex flex-row justify-between items-center ">
       <div>
       <h2 className="card-title">{model}</h2>
        <p>{manufacturer}</p>
       </div>
       <FaHeart/>
       </div>
        <div className="card-actions justify-end">
          <Link to='/details'><button className="btn btn-success btn-outline">View Details</button></Link>
        </div>
      </div>
    </div>
    );
  };
  
  export default CategoryCard;
  