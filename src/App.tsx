import React from 'react';

import { Counter } from './features/counter/Counter';
import { TaskList } from './features/task/TaskList';
import { TaskInput } from './features/task/TaskInput';

export const App: React.VFC = () => (
  <div className="App">
    <h1>Redux Test App</h1>
    <Counter />
    <TaskInput />
    <TaskList />
  </div>
);
