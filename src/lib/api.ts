import axios from "axios";
import { ITodo } from "./types";

export const getAllToDos = async():Promise<ITodo[]> => {
    const response = await axios.get('http://localhost:3004/todos');
    return response.data;
}

type InputTodo = Omit<ITodo, 'id'>  // not tip enq stexcum, vory = a ITodo hanac id dashty
type CompletedTodo = Omit<ITodo, 'text'>
export const add = async(obj: InputTodo):Promise<ITodo> => {
    const response = await axios.post('http://localhost:3004/todos', obj);
    return response.data
}

export const remove = async (id: string): Promise<any> => {
    const response = await axios.delete(`http://localhost:3004/todos/${id}`);
    return response.data;
}

export const update = async (obj: CompletedTodo): Promise<any> => {
    const response = await axios.patch(`http://localhost:3004/todos/${obj.id}`, { completed: obj.completed });
    return response.data;
}   