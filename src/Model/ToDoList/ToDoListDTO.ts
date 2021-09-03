import ToDoList from "./ToDoList";
import ToDoEntryDTO from "./ToDoEntryDTO";
import {ToDoEntryType} from "./ToDoEntryType";

export default class ToDoListDTO {
    public static NotFound: ToDoListDTO = new ToDoListDTO("Not Found TodoListDTO", false,-1, []);
    public title: string = "";
    public isComplete: boolean = true;
    public hash: number = -1;
    public entries: ToDoEntryDTO[] = [];

    constructor(title: string, isComplete: boolean, hash: number, entries: ToDoEntryDTO[]) {
        this.title = title;
        this.isComplete = isComplete;
        this.entries = entries;
        this.hash = hash;
    }

    public toToDoListObject(): ToDoList {
        let obj: ToDoList = new ToDoList(this.title, this.isComplete, this.hash, this.entries.map((entry) => {
            let e: ToDoEntryDTO = new ToDoEntryDTO("", ToDoEntryType.None);
            Object.assign(e, entry);

            return e.ToITdoEntry()
        }
        ));
        return obj;
    }

    public static fromJson(json: string): ToDoListDTO { // JSON parse with casting doesnt work for typescript objects :(
        // Object itself
        let temp: ToDoListDTO = new ToDoListDTO("", false, -1,[]);
        Object.assign(temp, json);

        //Nested objects
        temp.entries.map((entry) => {
            let e: ToDoEntryDTO = new ToDoEntryDTO("", ToDoEntryType.None);
            Object.assign(e, entry);
        });

        return temp;
    }
}
