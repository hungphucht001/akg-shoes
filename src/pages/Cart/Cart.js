import React, { useEffect } from 'react'
import useAxiosPrivate from '~/hooks/useAxiosPrivate'
function Cart(props) {
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        const fetch = async () => {
            const res = await axiosPrivate.get('/cart');
            console.log(res)
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
