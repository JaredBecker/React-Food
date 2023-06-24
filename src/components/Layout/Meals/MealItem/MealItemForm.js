import { useRef, useState } from 'react';
import Input from '../../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const amountInput = useRef();
    const [isValid, setIsValid] = useState(true);

    function summitHandler(event) {
        event.preventDefault();

        const enteredAmount = amountInput.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form onSubmit={summitHandler} className={classes.form}>
            <Input
                ref={amountInput}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'text',
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1,
                }}
            />
            <button>Add</button>
            {!isValid && <p>Please enter a valid amount: 1-5</p>}
        </form>
    )
};

export default MealItemForm;
