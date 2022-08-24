import {FC} from 'react';
import {Link, useLocation} from "react-router-dom";

import Items from "./Items";
import FilterSearch from "./FilterSearch";
import {useAppSelector} from "../../../../../pet-hub/my-app/src/hooks/useAppSelectore";

import "../../../../../pet-hub/my-app/src/styles/header.scss"
import Logo from "../../assets/img/logo.jpg"

const Header: FC = () => {
    const {isAuth} = useAppSelector(state => state.user);
    const {pathname} = useLocation();

    if (pathname === "/login") return null

    return (
        <header className="header">
            <div className="header__container">
                <Link to={"/"}>
                    <div className="header__box">
                            <img className="header__box-img" src={Logo} alt="logo"/>
                    </div>
                </Link>

                <Items />
                <FilterSearch />

                {isAuth && <div className="header__avatar">
                    <div className="header__avatar-img">
                        <img src="https://icon-library.com/images/icon-avatar/icon-avatar-19.jpg" alt="avatar"/>
                    </div>
                    <div className="header__avatar-box">
                        <h4 className="header__avatar-username">Maximus</h4>
                        <span className="header__avatar-rating">4.3k</span>
                    </div>
                </div>}

                {!isAuth && (
                     <div className="header__login">
                         <Link to="/login">
                             <button>Login</button>
                         </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;