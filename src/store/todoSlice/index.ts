import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ITodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      if (!action.payload.title) return state;
      const todosUpdated = [...state.todos, action.payload];
      state.todos = todosUpdated;
    },

    removeTodo: (state, action: PayloadAction<ITodo>) => {
      const todosUpdated = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = todosUpdated;
    },

    toggleCompleTodo: (state, action: PayloadAction<ITodo>) => {
      const todoUpdate = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          const updatedTodo: ITodo = {
            id: todo.id,
            title: todo.title,
            isCompleted: todo.isCompleted === true ? false : true,
          };
          return updatedTodo;
        }
        return todo;
      });
      state.todos = todoUpdate;
    },
  },
});

export const { addTodo, removeTodo, toggleCompleTodo } = todoSlice.actions;
export default todoSlice.reducer;

export interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITodoState {
  todos: ITodo[];
}
