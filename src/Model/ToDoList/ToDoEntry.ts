export default interface IToDoEntry {
    htmlRepresentation(): string;
}

export interface IToDoEntry_t<T> extends IToDoEntry {
    value: T;
}
