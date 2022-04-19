import { useEffect, useRef } from "react";

// кастомный хук для возвращения предыдущего значения value

export const usePrev = (value) => {
    const prev = useRef();

    useEffect(() => {
        prev.current = value;
    }, [value]);

    return prev.current;
};