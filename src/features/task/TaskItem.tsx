import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from './taskSlice';

const StyledTitle = styled.div`
  padding-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

interface Props {
  task: any;
}

export const TaskItem: React.VFC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.completed}
      />
      <StyledTitle>{task.title}</StyledTitle>
      <button type="button" onClick={() => dispatch(deleteTask(task))}>
        DELETE
      </button>
    </Wrapper>
  );
};
