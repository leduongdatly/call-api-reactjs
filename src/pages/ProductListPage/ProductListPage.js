import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDeleteProductRequest, actFetchProductsRequest } from '../../actions/index';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';

function ProductListPage(props) {

    const { products } = props;

    console.log(products)

    useEffect(() => {
        props.fetchAllProducts();
    }, []);

    const showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index} product={product} index={index} deleteProduct={deleteProduct} />
                )
            })
        }
        return result;
    }

    const deleteProduct = (id) => {
        props.onDeleteProduct(id);
        alert("xóa thành công !");
    }

    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-15" >
                    Thêm sản phẩm
                </Link>
                <ProductList>
                    {showProducts(products)}
                </ProductList>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);