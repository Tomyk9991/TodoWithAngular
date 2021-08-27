import ToDoListDTO from "../ToDoList/ToDoListDTO";

export default class BackendCommunication {
    private static get uri(): string { return "/api/TodoItems" };

    public static async PUT(todoItem: ToDoListDTO): Promise<ToDoListDTO> {
        let request: RequestInit = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoItem)
        };

        let response: Response = await fetch(BackendCommunication.uri, request);

        if (response.ok) {
            let parsedObj: ToDoListDTO = ToDoListDTO.fromJson(JSON.parse(await response.text()));
            return parsedObj;
        }

        return new ToDoListDTO("<<Not found.BackendCommunication.ts>>", true, []);
    }
}
