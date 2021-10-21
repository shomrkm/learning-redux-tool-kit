import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  color: rgb(112, 76, 182);
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  padding-bottom: 4px;
  margin-right: 8px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  transition: all 0.15s;
  &:hover {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }
  &:focus {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }
  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

const StyledValue = styled.div`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: 'Courier New', Courier, monospace;
`;

const StyledTextbox = styled.input`
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
  margin-right: 8px;
`;

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <StyledRow>
        <StyledButton
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </StyledButton>
        <StyledValue>
          <span>{count}</span>
        </StyledValue>
        <StyledButton
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </StyledButton>
      </StyledRow>
      <StyledRow>
        <StyledTextbox
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <StyledButton
          type="button"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </StyledButton>
      </StyledRow>
    </div>
  );
}
