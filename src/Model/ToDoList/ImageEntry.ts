import {IToDoEntry_t} from "./ToDoEntry";
import ToDoEntryDTO from "./ToDoEntryDTO";
import {ToDoEntryType} from "./ToDoEntryType";

export default class ImageEntry implements IToDoEntry_t<string> {
    value: string;

    constructor(source: string) {
        this.value = source;
    }

    htmlRepresentation(): string {
        return `<img src="${this.value}" width="15%"/>`;
    }

    public toDTO(): ToDoEntryDTO {
       return new ToDoEntryDTO(this.value, ToDoEntryType.Img);
    }
}
