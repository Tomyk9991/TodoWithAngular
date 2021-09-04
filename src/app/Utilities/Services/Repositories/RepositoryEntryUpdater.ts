import IRepository from "./IRepository";
import ToDoList from "../../../../Model/ToDoList/ToDoList";
import {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";

export default class RepositoryEntryUpdater<T> implements IRepository<T, ToDoList> {
    public action(list: ToDoList, entry: IToDoEntry_t<T>): ToDoList {
        for (let i = 0; i < list.entries.length; i++) {
            if (list.entries[i] === entry) {
                list.entries.splice(i, 1);
                break;
            }
        }

        return list;
    }
}
