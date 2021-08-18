import ToDoList from "../../../Model/ToDoList/ToDoList";

export default class BackendMockToDoList {

    private static lists: Map<number, ToDoList> = new Map<number, ToDoList>();

    public static add(hash: number, todoList: ToDoList): void {
        BackendMockToDoList.lists.set(hash, todoList);
    }

    public static get(hash: number): ToDoList {
        let value: ToDoList | undefined = BackendMockToDoList.lists.get(hash);
        if (value) {
            return value;
        }

        return new ToDoList("Not found", 0);
    }
}
