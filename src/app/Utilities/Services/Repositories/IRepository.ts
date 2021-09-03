import ToDoList from "../../../../Model/ToDoList/ToDoList";
import {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";

export default interface IRepository<Type, Return> {
    action(list: ToDoList, entry: IToDoEntry_t<Type>): Promise<Return>;
}
