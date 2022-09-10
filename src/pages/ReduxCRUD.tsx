import { useState } from "react";
import {
  addTodo,
  ITodo,
  removeTodo,
  toggleCompleTodo,
} from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const createUniqueID = () => {
  return String(Math.random());
};

const currentTodoInitialState = {
  id: "",
  isCompleted: false,
  title: "",
};

export const ReduxCRUD = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const [currentTodo, setCurrentTodo] = useState<ITodo>(
    currentTodoInitialState
  );

  const handleAddTodo = () => {
    dispatch(addTodo({ ...currentTodo, id: createUniqueID() }));
    setCurrentTodo(currentTodoInitialState);
  };

  const handleRemoveTodo = (todo: ITodo) => {
    dispatch(removeTodo(todo));
  };

  const handleToggleTodo = (todo: ITodo) => {
    dispatch(toggleCompleTodo(todo));
  };

  return (
    <div>
      <div>
        <input
          placeholder="Todo"
          value={currentTodo?.title}
          onChange={(e) =>
            setCurrentTodo({ ...currentTodo, title: e.target.value })
          }
        />
        <button onClick={handleAddTodo}>Criar Todo</button>
      </div>
      <ul>
        {todos.todos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", width: "full" }}>
            <p>{todo.title}</p>
            <button onClick={() => handleToggleTodo(todo)}>
              {todo.isCompleted ? "Não completo" : "Completo"}
            </button>
            <button onClick={() => handleRemoveTodo(todo)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
