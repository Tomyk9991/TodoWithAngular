import {IToDoEntry_t} from "./ToDoEntry";

export default class ImageEntry implements IToDoEntry_t<string> {
    value: string;

    constructor(source: string) {
        this.value = source;
    }

    htmlRepresentation(): string {
        return `<img src="${this.value}" width="15%"/>`;
    }
}
