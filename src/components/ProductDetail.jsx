import { useEffect, useState } from "react";
import { getProductbyId } from "../services/services";
import { useNavigate, useParams } from "react-router-dom";
import strImage from '../assets/images/star.png';
import '../styles/ProductDetail.css'; // 🆕 External stylesheet

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    try {
      const data = await getProductbyId(id);
      if (data) {
        setProduct(data);
      }
    } catch (err) {
      console.error("Error fetching product details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  if (!product) {
    return <p className="error-text">No product found.</p>;
  }

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.title}</h1>

      <div className="product-content">
        <div className="product-image-wrapper">
          <img src={product.image} alt="product" className="product-image" />
        </div>

        <div className="product-description">
          <p>{product.description}</p>
        </div>

        <div className="product-rating">
          <div className="review-container">
            <img src={strImage} alt="star" className="review-star" />
            <p>{product.rating?.rate}</p>
          </div>
          <div className="rating-count">
            <p><span>+</span>{product.rating?.count}<span>-</span></p>
          </div>
        </div>

        <div className="product-footer">
          <p className="product-price">&#8377;{product.price}</p>
          <button onClick={() => navigate("/")} className="back-button">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
