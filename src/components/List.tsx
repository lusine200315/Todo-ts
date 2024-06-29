import { useContext } from "react"
import { ToDoContext } from "../lib/context"
import { ToDoItem } from "./ToDoItem";

export const List:React.FC = () => {
    const context = useContext(ToDoContext);
    if(!context) {
        throw new Error("No context");
    }

    const {state} = context;
    
    return <div className="list">
      {
        state.todos?.map(todo => (
            <ToDoItem key={todo.id} todo={todo} />
        ))
    }
    </div>
}