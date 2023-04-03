import React, {useState} from "react";
import "./Sorter.scss";


export enum SorterValuesType {cheepest="Самый дешевый", fastest= "Самый быстрый", optimal= "Оптимальный"};

type PropsType = {
    changeFilter: (value:SorterValuesType) => void
}

function Sorter(props:PropsType) {
    const [activeItems, setActiveItems] = useState(0);

    function sort(index: number, value: SorterValuesType) {
        setActiveItems(index);
        props.changeFilter(value)
    }

    return (
        <div className="content__button">
            <ul>
                { Object.values(SorterValuesType).map((i, index) => (
                        <li className={ activeItems === index ? "active" : "" }
                            onClick={() => sort(index, i) } key={index} >
                            {i}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Sorter;