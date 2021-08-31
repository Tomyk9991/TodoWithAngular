import {ToDoEntryType} from "./ToDoEntryType";
import IToDoEntry from "./ToDoEntry";
import StringEntry from "./StringEntry";
import ImageEntry from "./ImageEntry";

export default class ToDoEntryDTO {
    public value: string = "";
    public type: ToDoEntryType = ToDoEntryType.None;

    constructor(value: string, type: ToDoEntryType) {
        this.value = value;
        this.type = type;
    }

    public ToITdoEntry(): IToDoEntry {
        switch (this.type) {
            case ToDoEntryType.None:
                break;
            case ToDoEntryType.Str:
                return new StringEntry(this.value)
            case ToDoEntryType.Img:
                return new ImageEntry(this.value)
        }

        return {
            toDTO(): ToDoEntryDTO {
                return new ToDoEntryDTO("<<Not found>>", ToDoEntryType.None);
            },
            htmlRepresentation(): string {
                return "NOT FOUND"
            }
        }
    }
}
