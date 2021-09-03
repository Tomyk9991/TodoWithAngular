import {Component, Input, OnInit} from '@angular/core';
import IToDoEntry, {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";
import ToasterService from "../../../Utilities/Services/toaster.service";
import ToDoList from "../../../../Model/ToDoList/ToDoList";

@Component({
    selector: 'app-entry-container',
    templateUrl: './entry-container.component.html',
    styleUrls: ['./entry-container.component.css']
})
export class EntryContainerComponent implements OnInit {
    @Input() entry?: IToDoEntry;
    @Input() todoList?: ToDoList;

    public castedEntry?: IToDoEntry_t<string>;

    constructor(private toaster: ToasterService) {
    }

    ngOnInit(): void {
        this.castedEntry = <IToDoEntry_t<string>>this.entry;
    }

    //Callback from html
    public async deleteEntry(): Promise<void> {
        this.toaster.log(<string>this.castedEntry?.value, 1500);
    }
}
