import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProducts = products => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    };
}

export const actFetchProductsRequest = () => {
    return async (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    };
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actDeleteProductRequest = (id) => {
    return async (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actAddProductRequest = (product) => {
    return async (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return async (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        })
    }
}

export const actUpdaateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const actUpdaateProductRequest = (product) => {
    return async dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdaateProduct(res.data))
        })
    }
}