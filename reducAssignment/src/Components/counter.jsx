import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementLike, decrementLike } from '../redux/Action';

function Counter() {
  // Adding console logs to debug
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  console.log('Count:', count);
  console.log('Dispatch:', dispatch);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unlike</button>
    </div>
  );
}

export default Counter;
