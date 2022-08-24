import {FC} from "react";

import * as ReactIconsAi from 'react-icons/ai';
import * as ReactIconsBi from 'react-icons/bi';
import * as ReactIconsFi from 'react-icons/fi';

let IconComponent;

const Icon: FC<{name: string }> = ({name}) => {
    if (name.startsWith("Ai")){
        IconComponent = ReactIconsAi[name]
    } else if(name.startsWith("Bi")){
        IconComponent = ReactIconsBi[name]
    }else {
        IconComponent = ReactIconsFi[name]
    }

    return <IconComponent />
};

export default Icon;