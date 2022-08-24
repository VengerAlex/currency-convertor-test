import {useEffect} from 'react';

import useInput from "../../../../../pet-hub/my-app/src/hooks/useInput";
import useDebounce from "../../../../../pet-hub/my-app/src/hooks/useDebounce";
import { BiSearch } from 'react-icons/bi';

import "../../../../../pet-hub/my-app/src/styles/header.scss"

const FilterSearch = () => {
    const input = useInput("");
    const debounceValue = useDebounce(input.value, 500);

    useEffect(() => {
        console.log(debounceValue)
    }, [debounceValue])

    return (
        <div className="header__search">
            <BiSearch className="header__search-svg"/>
            <input
                {...input}
                placeholder="Find a friend"
                type="text"/>
        </div>
    );
};

export default FilterSearch;