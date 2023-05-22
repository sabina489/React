import React, {useState} from "react";
import './NewForm.css';

const ItemForm = ()=> {
    const [enteredTitle, setEnteredTitle] =useState('');
    const [enteredAmount, setEnteredAmount] =  useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // using one state instead of multiple state
    // const [userInput, setUserInput] = useState ({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

 

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // previous state
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle:event.target.value};
        // })
    };

    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        // ...userInput,
        // enteredAmount: event.target.value,
        // })
    }

    const DateChangeHandler = event => {
        
        setEnteredDate(event.target.value);

        // setUserInput ({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })

    }

// button for form submit
const submitHandler = (event) => {
    event.preventDefault();

    const ItemData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)

    };
    console.log(ItemData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

};

    return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
    <div className="new-expense__control">
    <label>Items name</label>
    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
    </div>

    <div className="new-expense__control">
    <label>Amount</label>
    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler}/>
    </div>

    <div className="new-expense__control">
    <label>Items name</label>
    <input type='date' value={enteredDate} min="2022-01-02" max="2023-04-19" onChange={DateChangeHandler}/>
    </div>

    <div className="new-expense__actions">
        <button type="submit">Add Items</button>
    </div>

    </div>
    </form>
);
};

export default ItemForm;