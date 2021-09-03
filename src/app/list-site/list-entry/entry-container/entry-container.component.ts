import {Component, Injectable, Input, OnInit} from '@angular/core';
import IToDoEntry, {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";
import ToasterService from "../../../Utilities/Services/toaster.service";
import ToDoList from "../../../../Model/ToDoList/ToDoList";
import IRepository from "../../../Utilities/Services/Repositories/IRepository";
import RepositoryEntryUpdater from "../../../Utilities/Services/Repositories/RepositoryEntryUpdater";

@Component({
    selector: 'app-entry-container',
    templateUrl: './entry-container.component.html',
    styleUrls: ['./entry-container.component.css']
})
@Injectable()
export class EntryContainerComponent implements OnInit {
    @Input() entry?: IToDoEntry;
    @Input() todoList?: ToDoList;

    private readonly updateEntryRepo: IRepository<string, void>;
    public castedEntry?: IToDoEntry_t<string>;

    constructor(private toaster: ToasterService) {
        this.updateEntryRepo = new RepositoryEntryUpdater<string>();
    }

    ngOnInit(): void {
        this.castedEntry = <IToDoEntry_t<string>>this.entry;
    }

    //Callback from html
    public async deleteEntry(): Promise<void> {
        if(this.todoList !== undefined && this.castedEntry !== undefined) {
            await this.updateEntryRepo.action(this.todoList, this.castedEntry);
        }
    }
}
