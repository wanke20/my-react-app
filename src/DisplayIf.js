import { useEffect } from "react";

export const DisplayIf = ({ condition, children }) => {
    return condition
        ? children
        : null;
}