import IToDoEntry from "./ToDoEntry";

export default class ToDoList {
    public title: string = "";
    public checked: boolean = true;
    public entries: IToDoEntry[] = [];
    public hash: number;

    constructor(todoTitle: string, hash: number) {
        this.title = todoTitle;
        this.hash = hash;
    }

    public addItem(item: IToDoEntry): void {
        this.entries.push(item);
    }
}
