import * as request from '~/utils/request';

export const a = async()=>{
    try{
        const res = await request.get('/users',{
            params: {
                limit: 5
            }
        })
        return res.data
    }
    catch(error){
         console.log(error);
    }
 }
 