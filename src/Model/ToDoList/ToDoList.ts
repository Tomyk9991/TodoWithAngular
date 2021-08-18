import IToDoEntry from "./ToDoEntry";

export default class ToDoList {
    public title: string = "";
    public checked: boolean = true;
    public entries: IToDoEntry[] = [];

    constructor(todoTitle: string) {
        this.title = todoTitle;
    }

    public addItem(item: IToDoEntry): void {
        this.entries.push(item);
    }
}
