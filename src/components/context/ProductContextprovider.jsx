import { createContext, useEffect, useState } from "react";
import { getProductData } from "../../services/services";
import PageNotfound from "../PageNotFound";

const ProductContext = createContext();
const ProductContextprovider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fillterData, setFillterData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProductList = async () => {
      setLoading(true)
      try {
        const data = await getProductData();
        console.log('product', data);
        if (data) {
          setProduct(data);
          setFillterData(data)
          setError(null)
        }
      } catch (err) {
        if (err.code === "ERR_NETWORK") {
          setError("Network Error: Please check your internet connection.");
        } else {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        setLoading(false)
      }
    };
    fetchProductList()
  }, [])

  return (
    <ProductContext.Provider value={{ product, loading, fillterData, setFillterData, error }}>
      {children}
    </ProductContext.Provider>
  )
};

export {
  ProductContextprovider,
  ProductContext
}