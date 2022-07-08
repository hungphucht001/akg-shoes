import * as request from '~/utils/request';

export const homeProductApi = async()=>{
    try{
        const res = await request.get('/products',{
            params: {
                limit: 5
            }
        })
        return res
    }
    catch(error){
         console.log(error);
    }
 }
 

 export const allProduct = async()=>{
    try{
        const res = await request.get('/products')
        return res
    }
    catch(error){
         console.log(error);
    }
 }
 

