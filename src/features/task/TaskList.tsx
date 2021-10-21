import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectTasks } from './taskSlice';
import { TaskItem } from './TaskItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TaskList: React.VFC = () => {
  const tasks = useSelector(selectTasks);
  return (
    <Wrapper>
      {tasks.map((task: any) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Wrapper>
  );
};
