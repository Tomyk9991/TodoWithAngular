import {IToDoEntry_t} from "./ToDoEntry";

export default class StringEntry implements IToDoEntry_t<string> {
    public value: string = "";

    public constructor(value: string) {
        this.value = value;
    }

    htmlRepresentation(): string {
        return `<h1>${this.value}</h1>`;
    }
}
