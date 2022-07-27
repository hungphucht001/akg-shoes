import React, { useEffect } from 'react'
import * as cartApi from '~/services/cartApi'

import useAxiosPrivate from '~/hooks/useAxiosPrivate'
function Cart(props) {
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axiosPrivate.get('/cart');
                console.log(res)
            }
            catch {
                console.log('err')
            }
        }
        fetch();
    }, []);

    return (
        <div>
            dưq
        </div>
    )
}

export default Cart
