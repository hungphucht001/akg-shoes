export const addProduct = (data) => {
    return {
        type: 'productList/addProduct',
        payload: data
    }
}

export const sortProduct = (pag) => {
    return {
        type: 'productList/sortProduct',
        payload: pag
    }
}

export const emptyProduct = () => {

    return {
        type: 'productList/emptyProduct'
    }

}
export const filterChangePrice = (arr) => {
    return {
        type: 'productList/filterChangePrice',
        payload: arr
    }
}
export const addPage = (pag) => {
    return {
        type: 'productList/addPage',
        payload: pag
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const prioriryFilterChange = (priorities) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priorities
    }
}

export const toggleCartComponent = (status) => {
    return {
        type: 'cart/toggleCartComponent',
        payload: status
    }
}

export const addToCart = (cartItem) => {
    return {
        type: 'cart/addToCart',
        payload: cartItem
    }
}

export const updateCart = (cartItem) => {
    return {
        type: 'cart/updateCart',
        payload: cartItem
    }
}


export const setAuth = (data) => {
    return {
        type: 'auth/setAuth',
        payload: data
    }
}
