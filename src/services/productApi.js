import * as request from '~/utils/request';

export const homeProductApi = async()=>{
    try{
        const res = await request.get('/products',{
            params: {
                _limit: 5,
                s: 1
            }
        })
        return res
    }
    catch(error){
         console.log(error);
    }
 }
 

 export const allProduct = async( pag )=>{
    try{
        const res = await request.get('/products',{
            params: {
                _limit: 8,
                _page: pag.page,
                s: pag.s,
                col:pag.col,
                type: pag.type,
            }
        })
        return res
       
    }
    catch(error){
         console.log(error);
    }
 }
 
 export const product = async(slug)=>{
    try{
        const res = await request.get(`/products/${slug}`)
        return res
    }
    catch(error){
         console.log(error);
    }
 }
