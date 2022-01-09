import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {

    var { product, index } = props;

    var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
    var statusClass = product.status ? 'warning' : 'default';

    const onDelete = id => {
        if (confirm("Bạn chắc muốn xóa chứ ?")) { //eslint-disable-line
            props.deleteProduct(id);
        }
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={`label label-${statusClass}`}>{statusName}</span>
            </td>
            <td>
                <Link to={`/product/${product.id}/edit`} className="btn btn-success">Sửa</Link>
                <button type="button" className="btn btn-danger ml-5" onClick={() => onDelete(product.id)}>Xóa</button>
            </td>
        </tr>
    );
}

export default ProductItem;