import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdaateProductRequest } from '../../actions';
import callApi from '../../utils/apiCaller';

function ProductActionPage(props) {

    var [product, setProduct] = useState({
        id: '',
        txtName: '',
        txtPrice: '',
        chkStatus: ''
    })

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            var id = params.id;
            props.onEditProduct(id);
        }
    }, [])

    useEffect(() => {
        if (props.itemEditing.id !== undefined) {
            setProduct(prev => ({
                ...prev,
                id: props.itemEditing.id,
                txtName: props.itemEditing.name,
                txtPrice: props.itemEditing.price,
                chkStatus: props.itemEditing.status
            }))
        }
    }, [props.itemEditing]);

    useEffect(() => {
        setProduct(prev => ({
            ...prev,
            id: '',
            txtName: '',
            txtPrice: '',
            chkStatus: ''
        }))
    }, []);

    const onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        setProduct(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const onSave = e => {
        e.preventDefault();
        var data = {
            id: product.id,
            name: product.txtName,
            price: product.txtPrice,
            status: product.chkStatus
        }
        if (product.id) {
            props.onUpdateProduct(data);
            alert("Cập nhật thành công !");
            navigate(-1);
        } else {
            props.onAddProduct(data);
            alert("Thêm thành công !");
            navigate(-1);
        }
    }

    return (
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>

            <form onSubmit={onSave}>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" className="form-control" name="txtName" value={product.txtName} onChange={onChange} />
                </div><div className="form-group">
                    <label>Giá</label>
                    <input type="number" className="form-control" name="txtPrice" value={product.txtPrice} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>Trạng thái</label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="" name="chkStatus" value={product.chkStatus} onChange={onChange} checked={product.chkStatus} />Còn hàng
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Lưu lại</button>
                <Link to="/product-list" className='btn btn-danger ml-5'>Trở lại</Link>
            </form>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdaateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);