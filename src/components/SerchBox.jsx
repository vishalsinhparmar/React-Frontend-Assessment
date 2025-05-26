import { useContext, useEffect, useState } from "react";
import '../styles/SearchProduct.css'
import { ProductContext } from "./context/ProductContextprovider";
const SearchBox = () => {
     const [query, setQuery] = useState("");
     const { product, setFillterData, loading } = useContext(ProductContext)
     const handleChangeval = (e) => {
          setQuery(e.target.value)
     }
     //  debounce function 
     const debounce = (fn, delay) => {
          let timerID;
          return function (...args) {
               clearTimeout(timerID);
               timerID = setTimeout(() => {
                    fn.apply(this, args)
               }, delay);

          }
     }

     //  serachQeuery function
     const serchQuery = (query) => {
          if (!query) {

               setFillterData(product)
          } else {
               console.log('product from serch box', product)
               const serchProduct = product.filter(item => item.title.toLowerCase().includes(query.toLowerCase())
               );
               setFillterData(serchProduct)
          }
     };
     //  debounce query function
     const debounceQuery = debounce(serchQuery, 1000);
     useEffect(() => {
          if (!loading && product.length > 0) {
               debounceQuery(query)
          }
     }, [query])

     return (
          <div className="input-container">
               <input
                    type="text"
                    name="serch"
                    onChange={handleChangeval}
                    value={query}
                    className="input-serch"
                    placeholder="Search"

               />
          </div>
     )
};

export default SearchBox;