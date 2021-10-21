import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { newTask } from './taskSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const TaskInput: React.VFC = () => {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState('');
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle('');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editTitle}
          onChange={handleTitleChange}
          placeholder="Please type in"
        />
        <button type="button">NEW</button>
      </form>
    </Wrapper>
  );
};
