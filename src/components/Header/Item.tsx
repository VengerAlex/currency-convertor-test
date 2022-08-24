import React, {FC} from 'react';
import {IRate} from "../../redux/reducers/rates/rates.interface";

interface IItem extends IRate {
    UAH: number | undefined
}

const Item: FC<IItem> = ({name, value, UAH}) => {
    if (UAH){
        const price = value * UAH
    }

    return (
        <>
            <li key={name} className="header__list-item">
                <h5>{name}</h5> <span className="list__price">{UAH}</span>
            </li>
        </>
    );
};

export default Item;