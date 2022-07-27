import * as request from '~/utils/request';
import pagination from "~/config/pagination"

export const homeProductApi = async () => {
    try {
        const res = await request.get('/products', {
            params: {
                _limit: 5,
                s: 1
            }
        })
        return res
    }
    catch (error) {
        console.log(error);
    }
}


export const allProduct = async (pag) => {
    try {
        const res = await request.get('/products', {
            params: {
                _limit: pagination.limit,
                _page: pag.page,
                s: pag.s,
                col: pag.col,
                type: pag.type,
                min: pag.min,
                max: pag.max
            }
        })
        return res

    }
    catch (error) {
        console.log(error);
    }
}

export const product = async (slug) => {
    try {
        const res = await request.get(`/products/${slug}`)
        return res
    }
    catch (error) {
        console.log(error);
    }
}


export const search = async (q) => {
    try {
        const res = await request.get(`/products/search?q=${q}`)
        return res
    }
    catch (error) {
        console.log(error);
    }
}