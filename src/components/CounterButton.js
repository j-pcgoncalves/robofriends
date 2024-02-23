import { useEffect, useState } from "react";

const CounterButton = ({ color }) => {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("CounterButton");
    }, [count])

    return (
        <button id="counter" color={color} onClick={updateCount}>
            Count: {count}
        </button>
    );
}

export default CounterButton;