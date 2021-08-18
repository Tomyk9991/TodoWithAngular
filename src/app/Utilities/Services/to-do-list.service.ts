import {Injectable} from '@angular/core';
import ToDoList from "../../../Model/ToDoList/ToDoList";
import StringEntry from "../../../Model/ToDoList/StringEntry";
import Sleep from "../Sleep";
import BackendMockToDoList from "./BackendMockToDoList";
import Hash from "../Hash";

@Injectable({
    providedIn: 'root'
})
export class ToDoListService {
    constructor() {
    }

    public async getList(hash: number): Promise<ToDoList> {
        await Sleep(Math.random() * 50);

        let list: ToDoList = BackendMockToDoList.get(hash);

        if (list != null)
            return list;

        throw new DOMException("Not found");
    }

    public async getLists(amount: number): Promise<ToDoList[]> {
        let lists: ToDoList[] = [];

        for (let i = 0; i < amount; i++) {
            let date: Date = new Date();
            let list: ToDoList = this.generateListFromDate(date, Hash(date.toISOString()), String(i));

            lists.push(list);
            BackendMockToDoList.add(Hash(date.toISOString()), list);

            await Sleep(Math.random() * 50);
        }

        return lists;
    }

    private generateListFromDate(date: Date, hash: number, content: string = ""): ToDoList {
        let str: string = date.toLocaleDateString();
        let title: string = date.toISOString();


        let list: ToDoList = new ToDoList(title, hash);
        list.addItem(new StringEntry(content !== "" ? content : str));

        return list;
    }
}

