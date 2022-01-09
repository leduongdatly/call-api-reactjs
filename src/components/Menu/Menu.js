import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/'
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list'
    }
]

const MenuLink = ({ label, to }) => {
    const location = useLocation()
    const match = location.pathname === to

    return (
        <li className={match ? 'active' : ''}>
            <Link to={to}>
                {label}
            </Link>
        </li>
    )
}

function Menu(props) {

    const showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} />
                );
            })
        }
        return result;
    }

    return (
        <div className="navbar navbar-default">
            <a className="navbar-brand">Trainning with API</a>
            <ul className="nav navbar-nav">
                {/* <li className="active">
                    <a>Trang chủ</a>
                </li>
                <li>
                    <a>Quản lý sản phẩm</a>
                </li> */}
                {showMenu(menus)}
            </ul>
        </div>
    );
}

export default Menu;