import {IToDoEntry_t} from "./ToDoEntry";
import ToDoEntryDTO from "./ToDoEntryDTO";
import {ToDoEntryType} from "./ToDoEntryType";

export default class StringEntry implements IToDoEntry_t<string> {
    public value: string = "";

    public constructor(value: string) {
        this.value = value;
    }

    htmlRepresentation(): string {
        return `<h1>${this.value}</h1>`;
    }

    public toDTO(): ToDoEntryDTO {
        return new ToDoEntryDTO(this.value, ToDoEntryType.Str);
    }
}


