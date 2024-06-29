import { ActionTypes, IAction, IState, ITodo } from "./types";

export const reducer = (state:IState, action:IAction ) => {
    switch (action.type) {
        case ActionTypes.setTodos:
            return {
                ...state,
                todos: action.payload as ITodo[]
            }
        case ActionTypes.addTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload as ITodo]
            }
        case ActionTypes.updateTodo:
            const updatedTodoPayload = action.payload as { id: string };

            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === updatedTodoPayload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
            case ActionTypes.removeTodo:
                const removeTodoPayload = action.payload as { id: string };

                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== removeTodoPayload.id)
                };
        default: 
            return state;
    }
}