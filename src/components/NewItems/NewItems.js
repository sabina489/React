import React from "react";
import './NewItems.css';
import ItemForm from "./ItemForm";


// button up communication componenets
// const NewItem = () => {
    const saveItemDataHandler = (enteredItemData) => {
        const itemData = {
            ...enteredItemData,
            id: Math.random().toString()
        };
        console.log(itemData);
    }
// }

const NewItems = () => {
    return <div className="new-expense">
        <ItemForm onSaveItemData = {saveItemDataHandler}/>
        {/* <form></form> */}
    </div>

}


export default NewItems;