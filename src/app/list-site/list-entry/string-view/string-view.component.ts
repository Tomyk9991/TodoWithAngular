import {Component, Input, OnInit} from '@angular/core';
import IToDoEntry, {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";

@Component({
    selector: 'app-string-view',
    templateUrl: './string-view.component.html',
    styleUrls: ['./string-view.component.css']
})
export class StringViewComponent implements OnInit {
    @Input() entry?: IToDoEntry;
    public castedEntry?: IToDoEntry_t<string>;

    constructor() {
    }

    ngOnInit(): void {
        this.castedEntry = <IToDoEntry_t<string>>this.entry;
    }

}
