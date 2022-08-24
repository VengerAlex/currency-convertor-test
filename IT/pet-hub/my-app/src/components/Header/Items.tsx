import {FC} from 'react';
import {Link, useLocation} from "react-router-dom";

import Icon from "../../../../../pet-hub/my-app/src/components/Icon";

import {items} from "../../../../../pet-hub/my-app/src/utils/data";
import "../../../../../pet-hub/my-app/src/styles/header.scss"
import clsx from 'clsx';

const Items: FC = () => {
    const {pathname} = useLocation();

    return (
        <ul className="header__list">
            {items.map(item => (
                <Link key={item.to} to={item.to}>
                    <li className={clsx(
                        "header__list-item",
                        {"header__list-item--active": pathname === item.to}
                    )}>
                        <Icon name={item.icon}/>
                        {item.title}
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default Items;