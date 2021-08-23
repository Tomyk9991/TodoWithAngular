import {Injectable} from '@angular/core';
import ToDoList from "../../../Model/ToDoList/ToDoList";
import StringEntry from "../../../Model/ToDoList/StringEntry";
import Sleep from "../Sleep";
import BackendMockToDoList from "./BackendMockToDoList";
import Hash from "../Hash";
import ImageEntry from "../../../Model/ToDoList/ImageEntry";

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

        for (let i = 0; i < Math.random() * 5; i++) {
            if (Math.random() < 0.5) {
                list.addItem(new ImageEntry("https://source.unsplash.com/random/400x400?sig=1\""));
            } else {
                list.addItem(new StringEntry(String(i)));
            }
        }

        return list;
    }
}

