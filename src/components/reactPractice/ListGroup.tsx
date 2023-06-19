import { useState } from "react";

type ListProp = {
    width: number
    list: string[]
    onSelect: (item: string) => void
}

export const ListGroup = (props: ListProp) => {

    const handleClick = (index: number) => {
        updateActive(index);
    }

    const [activeStatus, updateActive] = useState(0);

    return (
        <ul className="list-group" style={{width: `${props.width}vh`}}>
            {props.list.map((item, index) => {return (
                // key is required for following deletion
                <li className = {index === activeStatus? "list-group-item active" : "list-group-item"}
                    key={item}
                    // when assign an anonymous function to onClick, either 1, assign without input paramter
                    // or 2, use arrow function like below.
                    onClick={() => {
                        handleClick(index);
                        props.onSelect(item)
                    }}>{item}</li>
            )})}
        </ul>
    )
}