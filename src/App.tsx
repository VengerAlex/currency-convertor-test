import {FC, useEffect, useState} from 'react';

import {getRates} from "./redux/reducers/rates/rates.actions";
import {useAppDispatch} from "./hooks/useDispatch";
import {useAppSelector} from "./hooks/useAppSelector";
import {formValue} from "./utils";

import Header from "./components/Header";
import Converter from "./components/Converter";

import "./styles/index.scss"

const App: FC = () => {
    const dispatch = useAppDispatch();
    const [fromPrice, setFromPrice] = useState(1);
    const [toPrice, setToPrice] = useState(1);

    const {toCurrency, fromCurrency, ratesData, isLoading, isError} = useAppSelector(state => state.rates)

    useEffect(() =>  {
        dispatch(getRates())
    }, [])

    const onChangeFromPrice = (value: number) => {
        const fromRate = ratesData?.find(rate => rate.name === fromCurrency);
        const toRate = ratesData?.find(rate => rate.name === toCurrency);

        if (fromRate?.value && toRate?.value){
            const result = (value / fromRate.value) * toRate.value;


            setToPrice(formValue(result, 4))
        }

        setFromPrice(value)
    }
    const onChangeToPrice = (value: number) => {
        const fromRate = ratesData?.find(rate => rate.name === fromCurrency);
        const toRate = ratesData?.find(rate => rate.name === toCurrency);

        if (fromRate?.value && toRate?.value){
            const result = (fromRate?.value / toRate?.value) * value;


            setFromPrice(formValue(result, 4))
        }

        setToPrice(value)
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency])

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrency])

    return (
        <div className="app">
            <div className="container">
                <Header />

                {isLoading && <h3>Loading...</h3>}
                {isError && <h3>Error had occured</h3>}

                {!isError && <>
                    <div className="app__converters">
                        <Converter
                            price={fromPrice}
                            onChangeCurrency={onChangeFromPrice}
                            name="fromCurrency"
                            currency={fromCurrency}/>
                        <Converter
                            onChangeCurrency={onChangeToPrice}
                            price={toPrice}
                            name="toCurrency"
                            currency={toCurrency}/>
                    </div>
                </>}

            </div>
        </div>
    );
};

export default App;