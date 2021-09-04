import ToDoListDTO from "../../../Model/ToDoList/ToDoListDTO";
import {IWeakArray} from "./Data structures/IWeakArray";
import {SessionStorageToDoListWeakArray} from "./Data structures/SessionStorageToDoListWeakArray";

export default class TodoListCache {
    private static singleEntryCache: SessionStorageToDoListWeakArray = new SessionStorageToDoListWeakArray("singleUse");

    public static get SingleEntry_WA(): IWeakArray<number, ToDoListDTO> {
        return TodoListCache.singleEntryCache;
    }
}
