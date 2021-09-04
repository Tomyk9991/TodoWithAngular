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
        if (TodoListCache.SingleEntry_WA.contains(hash)) { //Check cache first
            return TodoListCache.SingleEntry_WA.pop(hash).toToDoListObject();
        }

        return (await BackendCommunication.GET(hash)).toToDoListObject();
    }

    public async updateToDoList(hash: number, updatedObject: ToDoList): Promise<void> {
        await BackendCommunication.UPDATE(hash, updatedObject.toDTO());
    }

    public async getRecentLists(amount: number): Promise<ToDoList[]> {
        let responseDTOs: ToDoListDTO[] = await BackendCommunication.GET_RECENT(amount);

        let recentLists: ToDoList[] = [];
        for (let i = 0; i < responseDTOs.length; i++) {
            TodoListCache.SingleEntry_WA.push(responseDTOs[i].hash, responseDTOs[i]);
            recentLists.push(responseDTOs[i].toToDoListObject());
        }

        return recentLists;
    }
}

