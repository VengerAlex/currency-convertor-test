import {FC, useState} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useDispatch";
import {handleCurrency} from "../../redux/reducers/rates/ratesSlice";

import "./converter.scss";


interface IConverter {
    currency: string,
    name: string,
    price: number,
    onChangeCurrency: any
}

const Converter: FC<IConverter> = ({price, currency, name, onChangeCurrency}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const {ratesData} = useAppSelector(state => state.rates);

    const openHandler = () => {
        setIsActive(!isActive)
    }

    const handleCurrencyChange = (name: string, value: string) => {
        dispatch(handleCurrency(([name, value])))
    }


    return (
        <div className="converter">

            <div onClick={openHandler} className="dropdown">
                <div className="dropdown__header">{currency}</div>

                {isActive &&
                     <ul className="dropdown__list">
                         {ratesData?.map(rate => (
                             <li onClick={() => handleCurrencyChange(name, rate.name)} key={rate.name} className="dropdown__list-item">
                                 {rate.name}
                             </li>
                         ))}
                     </ul>
                }
            </div>


            <input
                min={0}
                value={price}
                onChange={(e) => onChangeCurrency(Number(e.target.value))}
                className="converter__input"
                type="number"/>
        </div>
    );
};

export default Converter;