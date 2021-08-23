import {Component, Input, OnInit} from '@angular/core';
import ToDoList from "../../Model/ToDoList/ToDoList";
import {ListEntryComponent} from "../list-entry/list-entry.component";

@Component({
    selector: 'app-list-entry-preview',
    templateUrl: './list-entry-preview.component.html',
    styleUrls: ['./list-entry-preview.component.css']
})
export class ListEntryPreviewComponent implements OnInit {
    @Input() public first: boolean = false;
    @Input() public last: boolean = false;

    @Input() public entry: ToDoList | undefined;
    constructor() {

    }

    ngOnInit(): void {

    }

    // callback from html
    public previewClicked(): void {
        if (this.entry)
            ListEntryComponent.SelectedEntry = this.entry;
    }

    // callback from html
    public checkBoxClicked(state: boolean): void {
        if (this.entry != undefined) {
            this.entry.checked = state;
        }
    }
}
