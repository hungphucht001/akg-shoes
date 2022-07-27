import * as request from '~/utils/request';

import useAxiosPrivate from '~/hooks/useAxiosPrivate'

export const getCart = async () => {

    const axiosPrivate = useAxiosPrivate()

    try {
        const res = await axiosPrivate.get('/cart')
        return res
    }
    catch (error) {
        console.log(error);
    }
}