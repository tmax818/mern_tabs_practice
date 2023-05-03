import {useState} from "react";

export const Tabs = ({items}) => {
    const [selectedItem, setSelectedItem] = useState({})



    const handleClick = (e, item) => {
        console.log(e, item)
        setSelectedItem(item)
    }
    return (
        <>
            {items.map(item => {
                return (

                    <button style={item === selectedItem ? {backgroundColor: 'red'}: {}} key={item.id} onClick={e=> handleClick(e, item)}>{item.label}</button>
                )
            })}
            <fieldset>
                {selectedItem.content}
            </fieldset>
        </>
    )
}