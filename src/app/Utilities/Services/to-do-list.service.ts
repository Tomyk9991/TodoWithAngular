import {Injectable} from '@angular/core';
import ToDoList from "../../../Model/ToDoList/ToDoList";
import StringEntry from "../../../Model/ToDoList/StringEntry";

@Injectable({
    providedIn: 'root'
})
export class ToDoListService {
    constructor() {

    }

    public getLists(amount: number): ToDoList[] {
        //TODO Database
        let lists: ToDoList[] = [];

        for (let i = 0; i < amount; i++) {
            lists.push(this.generateRandomListFromHash(this.stringToHash(new Date().toISOString())));
        }

        return lists;
    }

    private generateRandomListFromHash(hash: number): ToDoList {
        let length: number = this.random(hash++) * 10;

        let str: string = this.generateRandomString(length);
        let title: string = this.generateRandomString(length);

        let list: ToDoList = new ToDoList(title);
        list.addItem(new StringEntry(str));

        return list;
    }

    private random(seed: number): number {
        let x: number = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }
    private generateRandomString(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 10; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    private stringToHash(string: string): number {
        let hash: number = 0;
        let i: number = 0;
        let char;
        if (string.length === 0) return hash;

        for (let i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; //Convert to 32bit integer
        }

        return hash;
    }
}

