import ToDoListDTO from "../../../Model/ToDoList/ToDoListDTO";

export default class TodoListCache {
    public static add(todoList: ToDoListDTO): void {
        localStorage.setItem(String(todoList.hash), JSON.stringify(todoList));
    }

    public static get(hash: number): ToDoListDTO {
        let valueString: string | null = localStorage.getItem(String(hash));

        if (valueString !== null) {
            let value: ToDoListDTO = ToDoListDTO.fromJson(JSON.parse(valueString));
            return value;
        }

        return ToDoListDTO.NotFound;
    }

    public static contains(hash: number): boolean {
        return localStorage.getItem(String(hash)) !== null;
    }
}
