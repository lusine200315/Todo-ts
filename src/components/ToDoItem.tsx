import { useContext } from "react";
import { ToDoContext } from "../lib/context";
import { ActionTypes, ITodo } from "../lib/types";
import { remove, update } from "../lib/api";

interface Props {
    todo: ITodo;
}

export const ToDoItem: React.FC<Props> = ({ todo }) => {
    const context = useContext(ToDoContext);

    if (!context) {
        throw new Error("No context");
    }

    const { dispatch } = context;

    const handleRemove = (id: string) => {
        remove(id)
        .then((res) => {
            dispatch({ type: ActionTypes.removeTodo, payload: res })
        })
        .catch((error) => {
            console.error("Failed to remove todo:", error);
        });
    }

    const handleComplete = (todo: ITodo) => {
        update({id: todo.id,  completed: !todo.completed})
        .then((res) => {
            dispatch({ type: ActionTypes.updateTodo, payload: res})
        })
        .catch((error) => {
            console.error("Failed to update todo:", error);
        });
    }

    return (
        <div className={`item ${todo.completed ? 'completed' : ''}`}>
            <p>{todo.text}</p>
            <button onClick={() => handleComplete(todo)}>
                Done
            </button>
            <button onClick={() => handleRemove(todo.id)}>
                Remove
            </button>
        </div>
    );
};
