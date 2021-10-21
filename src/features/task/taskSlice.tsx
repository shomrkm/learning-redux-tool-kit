import { createSlice } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface State {
  idCount: number;
  tasks: Task[];
}

interface Action {
  payload: any;
}

/* eslint-disable no-param-reassign */
export const taskSlice = createSlice({
  name: 'counter',
  initialState: {
    idCount: 3,
    tasks: [
      { id: 3, title: 'TASK C', completed: false },
      { id: 2, title: 'TASK B', completed: true },
      { id: 1, title: 'TASK A', completed: false },
    ],
  },
  reducers: {
    newTask: (state: State, action: Action) => {
      state.idCount += 1;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state: State, action: Action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state: State, action: Action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: any) => state.task.tasks;

export default taskSlice.reducer;
