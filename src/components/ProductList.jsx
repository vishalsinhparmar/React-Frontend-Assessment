import { useEffect, useState } from "react";
import { getProductData } from "../services/services";
import { useNavigate } from "react-router-dom";
import strImage from '../assets/images/star.png';

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch product data from API
  const fetchProductList = async () => {
    try {
      const data = await getProductData();
      console.log('product', data);
      if (data) {
        setProduct(data);
        setLoading(false);
      }
    } catch (err) {
      console.log('Error in fetchProductList:', err);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div className="product-list">
      {loading ? (
        <p>Loading...</p>
      ) : product.length === 0 ? (
        <p>No items found</p>
      ) : (
        <div className="product-item">
          {product.map((item) => (
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
