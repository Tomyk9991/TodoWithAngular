import ToDoListDTO from "../../../Model/ToDoList/ToDoListDTO";

export default class TodoListCache {
    public static add(todoList: ToDoListDTO): void {
        sessionStorage.setItem(String(todoList.hash), JSON.stringify(todoList));
    }

    public static add_recent(parsedObjs: ToDoListDTO[]): void {
        sessionStorage.setItem("recent", JSON.stringify(parsedObjs));
    }

    public static get_recent(amount: number): ToDoListDTO[] {
        let valueString: string | null = sessionStorage.getItem("recent");

        if (valueString !== null) {
            let jsObjs: any[] = JSON.parse(valueString);
            let parsedObjs: ToDoListDTO[] = [];

            for (let i = 0; i < jsObjs.length; i++) {
                let value: ToDoListDTO = ToDoListDTO.fromJson(jsObjs[i]);
                parsedObjs.push(value);
            }

            return parsedObjs;
        }

        return [];
    }

    public static get(hash: number): ToDoListDTO {
        let valueString: string | null = sessionStorage.getItem(String(hash));

        if (valueString !== null) {
            let value: ToDoListDTO = ToDoListDTO.fromJson(JSON.parse(valueString));
            return value;
        }

        return ToDoListDTO.NotFound;
    }

    public static contains(hash: number): boolean {
        return sessionStorage.getItem(String(hash)) !== null;
    }
}
