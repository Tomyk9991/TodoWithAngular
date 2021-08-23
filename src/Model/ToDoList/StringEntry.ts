import {IToDoEntry_t} from "./ToDoEntry";

export default class StringEntry implements IToDoEntry_t<string> {
    public value: string = "";

    public constructor(value: string) {
        this.value = value;
    }

    public toString(): string {
        return this.value;
    }
}
