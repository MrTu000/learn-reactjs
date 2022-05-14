import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CounterSlice';

CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const handelIncreaseCounter = () => {
        const action = increase()
        dispatch(action)
    }

    const handelDecreaseCounter = () => {
        const action = decrease()
        dispatch(action)
    }

    return (
        <div>
            Counter: {counter}
            <button onClick={handelIncreaseCounter}>Increase</button>
            <button onClick={handelDecreaseCounter}>Decrease</button>
        </div>
    );
}

export default CounterFeature;