import React from 'react';
import { useImmer } from 'use-immer';
import cn from 'classnames';

// ! using web hooks with https://github.com/immerjs/use-immer

export default function Buttons({ count = 5 }) {
  const [state, updateState] = useImmer({
    buttonCounts: Array(count).fill(0),
    lastClicked: null,
  });

  const handleClick = (i) => () => {
    updateState((prevState) => {
      prevState.buttonCounts[i] += 1;
      prevState.lastClicked = i;
    });
  };

  return (
    <>
      {state.buttonCounts.map((btnCount, i) => {
        const classes = cn('btn m-1', {
          'btn-primary': state.lastClicked !== i,
          'btn-success': state.lastClicked === i,
        });
        return (
          <button onClick={handleClick(i)} key={i} className={classes} type="button">{btnCount}</button>
        );
      })}
    </>
  );
}
