import { useState, useEffect } from 'react';

export const usePersistentState = (storageKey, defaultValue, Type) => {
    const [state, setState] = useState(
        Type(localStorage.getItem(storageKey)) || defaultValue
    );

    useEffect(() => {
        localStorage.setItem(storageKey, state);
    }, [state]);

    return [state, setState];
}