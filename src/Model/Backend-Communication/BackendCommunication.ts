import ToDoListDTO from "../ToDoList/ToDoListDTO";
import ToDoList from "../ToDoList/ToDoList";

export default class BackendCommunication {
    private static get uri(): string { return "/api/TodoItems" };
    private static get recent_extension(): string { return "/recent/" };

    private static get headersObject(): any {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }

    public static async UPDATE(hash: number, targetObject: ToDoListDTO): Promise<void> {
        let request: RequestInit = {
            method: 'PUT',
            headers: this.headersObject,
            body: JSON.stringify(targetObject)
        };

        console.log(hash);
        console.log(targetObject);

        let fullUri: string = BackendCommunication.uri + "/" + String(hash);

        let response: Response = await fetch(fullUri, request);

        if(!response.ok) {
            throw new Error("BackendCommunication failed while updating");
        }
    }

    public static async GET_RECENT(amount: number): Promise<ToDoListDTO[]> {
        let request: RequestInit = {
            method: 'GET',
            headers: this.headersObject
        };

        let fullUri: string = "";
        if (amount <= -1) {
            fullUri = BackendCommunication.uri;
        } else {
            fullUri = BackendCommunication.uri + BackendCommunication.recent_extension + String(amount);
        }

        let response: Response = await fetch(fullUri, request);

        if (response.ok) {
            let parsedObjs: ToDoListDTO[] = [];
            let jsObjs: any[] = JSON.parse(await response.text());

            for (let i = 0; i < jsObjs.length; i++) {
                parsedObjs.push(ToDoListDTO.fromJson(jsObjs[i]));
            }

            return parsedObjs;
        }

        return [];
    }

    public static async GET(hash: number): Promise<ToDoListDTO> {
        let request: RequestInit = {
            method: 'GET',
            headers: this.headersObject
        };

        let fullUri: string = BackendCommunication.uri + "/" + String(hash);
        let response: Response = await fetch(fullUri, request);

        if (response.ok) {
            let parsedObj: ToDoListDTO = ToDoListDTO.fromJson(JSON.parse(await response.text()));
            return parsedObj;
        }

        return new ToDoListDTO("<<Not found.BackendCommunication.ts>>", true,-1, []);
    }


    public static async CREATE(todoItem: ToDoListDTO): Promise<ToDoListDTO> {
        let request: RequestInit = {
            method: 'POST',
            headers: this.headersObject,
            body: JSON.stringify(todoItem)
        };

        let response: Response = await fetch(BackendCommunication.uri, request);

        if (response.ok) {
            let parsedObj: ToDoListDTO = ToDoListDTO.fromJson(JSON.parse(await response.text()));
            return parsedObj;
        }

        return new ToDoListDTO("<<Not found.BackendCommunication.ts>>", true,-1, []);
    }
}
