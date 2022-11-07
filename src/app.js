import TodoCount from "./todoCount.js";
import TodoForm from "./todoForm.js";
import TodoList from "./todoList.js";
import { setItem } from "./storage.js";
import { keyOfLocalStorage } from "./main.js";
import Header from "./header.js";

export default function App({ $target, initialState }) {
  if (!new.target) {
    throw new Error("new 연산자와 함께 호출해 주세요");
  }
  this.state = initialState;

  this.setState = (nextTodoInfo) => {
    const newTodos = nextTodoInfo.todos;
    const newCompletedCount = newTodos.reduce((accumulator, current) => {
      if (current.isCompleted) return accumulator + 1;
      return accumulator;
    }, 0);
    const newTotalCount = newTodos.length;

    this.state = {
      todos: newTodos,
      completedCount: newCompletedCount,
      totalCount: newTotalCount,
    };

    todoList.setState(this.state.todos);
    todoCount.setState({
      completedCount: this.state.completedCount,
      totalCount: this.state.totalCount,
    });
  };

  new Header({ $target });

  new TodoForm({
    $target,
    onSubmit: (inputValue) => {
      const newTodo = {
        id: this.state.todos.length + 1,
        text: inputValue,
        isCompleted: false,
      };

      this.setState({
        ...this.state,
        todos: [...this.state.todos, newTodo],
      });

      setItem(keyOfLocalStorage, this.state);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState: this.state.todos,
    onToggle: (id) => {
      const newTodos = [...this.state.todos].map((todo) => {
        if (todo.id === Number(id)) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });

      this.setState({
        ...this.state,
        todos: newTodos,
      });

      setItem(keyOfLocalStorage, this.state);
    },

    onRemove: (id) => {
      const newTodos = [...this.state.todos];
      const deleteIndex = newTodos.findIndex((todo) => todo.id === id);
      newTodos.splice(deleteIndex, 1);

      this.setState({
        ...this.state,
        todos: newTodos,
      });

      setItem(keyOfLocalStorage, this.state);
    },
  });

  const todoCount = new TodoCount({
    $target,
    initialState: {
      completedCount: this.state.completedCount,
      totalCount: this.state.totalCount,
    },
  });
}
