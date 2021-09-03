import {Injectable} from '@angular/core';
import TodoListCache from "./TodoListCache";
import BackendCommunication from "../../../Model/Backend-Communication/BackendCommunication";
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

    // public async updateToDoList(hash: number, updatedObject: ToDoList): Promise<ToDoList> {
    //     await BackendCommunication.UPDATE(hash, updatedObject);
    // }

    public async getRecentLists(amount: number): Promise<ToDoList[]> {
        //Check cache first
        let responseDTOs: ToDoListDTO[] = TodoListCache.get_recent(amount);

        //TODO: Still send data to the backend and ask, if there's newer data

        if (responseDTOs.length === 0) {
            console.log("No session data found. Fetch from backend");
            responseDTOs = await BackendCommunication.GET_RECENT(amount);
            TodoListCache.add_recent(responseDTOs); //Newer data, must be stored in session storage
        }

        let recentLists: ToDoList[] = [];
        for (let i = 0; i < responseDTOs.length; i++) {
            TodoListCache.add(responseDTOs[i]);
            recentLists.push(responseDTOs[i].toToDoListObject());
        }

        return recentLists;
    }
}

