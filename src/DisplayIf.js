import { useEffect } from "react";

export const DisplayIf = ({ condition, children }) => {
    useEffect(() => {
        console.log(children);
        console.log(condition);
    });

    return condition
        ? children
        : null;
}