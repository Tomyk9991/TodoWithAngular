import {IWeakArray} from "./IWeakArray";
import ToDoListDTO from "../../../../Model/ToDoList/ToDoListDTO";

export class SessionStorageToDoListWeakArray implements IWeakArray<number, ToDoListDTO> {

    public constructor(private identifier: string) { }

    public push(hash: number, element: ToDoListDTO): void {
        sessionStorage.setItem(this.identifier + String(hash), JSON.stringify(element));
    }

    public remove(hash: number): void {
        sessionStorage.removeItem(this.identifier + String(hash));
    }

    public pop(hash: number): ToDoListDTO {
        let value: ToDoListDTO = this.get(hash);

        if (value !== ToDoListDTO.NotFound) {
            this.remove(hash);
        }

        return value;
    }

    public contains(hash: number): boolean {
        return sessionStorage.getItem(this.identifier + String(hash)) !== null;
    }

    private get(hash: number): ToDoListDTO {
        let valueString: string | null = sessionStorage.getItem(this.identifier + String(hash));

        if (valueString !== null) {
            let value: ToDoListDTO = ToDoListDTO.fromJson(JSON.parse(valueString));
            return value;
        }

        return ToDoListDTO.NotFound;
    }
}
