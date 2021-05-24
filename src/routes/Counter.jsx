import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../lib/slices/counter';

import '../styles/counter.css';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter);

    return (
        <div id='counter-container' className='counter-container'>
            <h2>Counter</h2>
            <button onClick={() => dispatch(decrement())}>&ndash;</button>
            <span>{value}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}

export default Counter;