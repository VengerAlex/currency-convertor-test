import React, {FC, memo} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";

import "./header.scss";
import Item from "./Item";

const Header: FC = () => {
    const {ratesData, isLoading} = useAppSelector(state => state.rates);
    const UAH = ratesData?.find(rate => rate.name === "UAH");

    if (isLoading) {
        return <h4>Loading...</h4>
    }

    return (
        <header className="header">
            <ul className="header__list">
                {ratesData?.filter(rate => rate.name !== "UAH")
                    .map((rate) => <Item
                    key={rate.name}
                    UAH={UAH?.value}
                    name={rate?.name}
                    value={rate?.value}
                    />
                )}
            </ul>
        </header>
    );
};

export default memo(Header);