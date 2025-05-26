import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import strImage from '../assets/images/star.png';
import SearchBox from "./SerchBox";
import { ProductContext } from "./context/ProductContextprovider";


const ProductList = () => {
 const {fillterData,loading,error} = useContext(ProductContext)
  const navigate = useNavigate();
  if(error){
      return (
        <div>
             <h2>{error}</h2>
             <button onClick={()=>window.location.reload()}>Retry</button>
        </div>
      )
  }
  return (
    <div className="product-list">
      <div>
      <SearchBox/>
      </div>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : fillterData.length === 0 ? (
        <div className="no-found">
           <p>No items found</p>
        </div>
      ) : (
        <div className="product-item">
          {fillterData.map((item) => (
            <div key={item.id} className="product-productData">
              <h1>{item.title.slice(0, 10)}...</h1>

              <div>
                <img src={item.image} alt="product" />
              </div>

              <div>
                <p>{item.description.slice(0, 100)}...</p>
              </div>

              {/* Rating Section */}
              <div className="rating-product">
                <div className="review-container">
                  <img src={strImage} alt="star" className="reviewImage" />
                  <p>{item?.rating?.rate}</p>
                </div>
                <div className="ratting">
                  <p>
                    <span>+</span>{item?.rating?.count}<span>-</span>
                  </p>
                </div>
              </div>

              {/* Price & Button */}
              <div className="end-data">
                <p className="price">&#8377;{item.price}</p>
                <button onClick={() => navigate(`/${item.id}`)} className="btn-btn">
                  Product Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
