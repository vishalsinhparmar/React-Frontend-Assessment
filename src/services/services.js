import axios from "axios";
const url = 'https://fakestoreapi.com';

const api = axios.create({
     baseURL:url
});

const getProductData = async ()=>{
    try{
        const res = await api.get('/products');
        return res.data;     

    }catch(err){
         console.log('erro happen in this getProductData',err)
    }
};


const getProductbyId = async (id)=>{
    try{
        const res = await api.get(`/products/${id}`);
        return res.data;     

    }catch(err){
         console.log('erro happen in this getProductData',err)
    }
};

export {
     getProductData,
     getProductbyId
}