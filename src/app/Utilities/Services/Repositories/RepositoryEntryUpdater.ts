import IRepository from "./IRepository";
import ToDoList from "../../../../Model/ToDoList/ToDoList";
import {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";
import ToasterService from "../toaster.service";
import BackendCommunication from "../../../../Model/Backend-Communication/BackendCommunication";
import ToDoListDTO from "../../../../Model/ToDoList/ToDoListDTO";

export default class RepositoryEntryUpdater<T> implements IRepository<T, void> {
    public async action(list: ToDoList, entry: IToDoEntry_t<T>): Promise<void> {
        for (let i = 0; i < list.entries.length; i++) {
            if (list.entries[i] === entry) {
                list.entries.splice(i, 1);
                ToasterService.Instance?.log("Removing element", 500);
                await BackendCommunication.UPDATE(list.hash, list.toDTO());
            }
        }


    }

}
