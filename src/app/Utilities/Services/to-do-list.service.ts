import {Injectable} from '@angular/core';
import TodoListCache from "./TodoListCache";
import BackendCommunication from "../../../Model/Backend-Communication/BackendCommunication";
import StringEntry from "../../../Model/ToDoList/StringEntry";
import ToDoListDTO from "../../../Model/ToDoList/ToDoListDTO";
import ToDoList from "../../../Model/ToDoList/ToDoList";

@Injectable({
    providedIn: 'root'
})
export class ToDoListService {
    constructor() {
    }

    public async getList(hash: number): Promise<ToDoList> {
        if (TodoListCache.contains(hash)) { //Check cache first
            return TodoListCache.get(hash).toToDoListObject();
        }

        console.log("Didn't found item: todolist.service.ts");

        return ToDoList.NotFound;
    }

    public async getRecentLists(amount: number): Promise<ToDoList[]> {
        let parsedObj: ToDoListDTO = await BackendCommunication.PUT(
            new ToDoListDTO("Walk dog", true, [
                new StringEntry("Say good morning").toDTO(),
                new StringEntry("Give him some food").toDTO()
            ]
        ));

        TodoListCache.add(parsedObj);
        let test: ToDoList = parsedObj.toToDoListObject();

        return [test];
    }
}

