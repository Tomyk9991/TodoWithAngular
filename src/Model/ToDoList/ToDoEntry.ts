import ToDoEntryDTO from "./ToDoEntryDTO";

export default interface IToDoEntry {
    htmlRepresentation(): string;
    toDTO(): ToDoEntryDTO;
}

export interface IToDoEntry_t<T> extends IToDoEntry {
    value: T;
}
