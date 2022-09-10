export const ReduxCRUD = () => {
  return (
    <div>
      <div>
        <input placeholder="Todo" />
        <button>Criar Todo</button>
      </div>
      <ul>
        <li style={{ display: "flex", width: "full" }}>
          <p>Estudar React</p>
          <button>Completar</button>
          <button>Remover</button>
        </li>
        <li style={{ display: "flex", width: "full" }}>
          <p>Estudar React</p>
          <button>Completar</button>
          <button>Remover</button>
        </li>
      </ul>
    </div>
  );
};
