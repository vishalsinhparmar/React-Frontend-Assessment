import axios from "axios";
const url = 'https://fakestoreapi.com';

const api = axios.create({
     baseURL:url
});

// product data are fetched
const getProductData = async ()=>{
    try{
        const res = await api.get('/products');
        return res.data;     

    }catch(err){
         console.log('erro happen in this getProductData',err)
         throw err
    }
};

// productId data fetch
const getProductbyId = async (id)=>{
    try{
        const res = await api.get(`/products/${id}`);
        return res.data;     

    }catch(err){
         console.log('erro happen in this getProductData',err)
         throw err
    }
};

export {
     getProductData,
     getProductbyId
}