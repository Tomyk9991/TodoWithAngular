import IToDoEntry from "./ToDoEntry";
import ToDoEntryDTO from "./ToDoEntryDTO";
import {ToDoEntryType} from "./ToDoEntryType";
import StringEntry from "./StringEntry";
import ImageEntry from "./ImageEntry";

export default class ToDoList {
    public static NotFound: ToDoList = new ToDoList("<<TodoList.ts::NotFound>>", false, -1, []);

    public title: string = "";
    public isComplete: boolean = true;
    public entries: IToDoEntry[] = [];
    public hash: number = -1;

    constructor(title: string, isComplete: boolean, hash: number, entries: IToDoEntry[]) {
        this.title = title;
        this.isComplete = isComplete;
        this.entries = entries;
        this.hash = hash;
    }

    public static fromJson(json: string): ToDoList {
        let temp: ToDoList = new ToDoList("", false, -1, []);
        Object.assign(temp, json);

        //Nested objects

        for (let i = 0; i < temp.entries.length; i++) {
            console.log(temp.entries[i]);
            let e: any | undefined;
            let dto: ToDoEntryDTO = temp.entries[i].toDTO();

            switch (dto.type) {
                case ToDoEntryType.None:
                    break;
                case ToDoEntryType.Str:
                    e = new StringEntry(dto.value)
                    break;
                case ToDoEntryType.Img:
                    e = new ImageEntry(dto.value)
                    break;
            }

            // let e: IToDoEntry = {
            //     htmlRepresentation(): string {
            //         return "kek";
            //     }, toDTO(): ToDoEntryDTO {
            //         return new ToDoEntryDTO("roflmau", ToDoEntryType.None);
            //     }
            //
            // };
            Object.assign(e, temp.entries[i]);

            temp.entries[i] = e;
        }

        // temp.entries.map((entry) => {
        //     let e: IToDoEntry = {
        //         htmlRepresentation(): string {
        //             return "kek";
        //         }, toDTO(): ToDoEntryDTO {
        //             return new ToDoEntryDTO("roflmau", ToDoEntryType.None);
        //         }
        //
        //     };
        //     Object.assign(e, entry);
        // })

        return temp;
    }
}
