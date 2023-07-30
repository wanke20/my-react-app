import React, { useEffect } from 'react';
import { Button } from './Button';

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <Button buttoncolor = "red" onClick={onIncrement}>Click Me!</Button>
        </>
    )
}