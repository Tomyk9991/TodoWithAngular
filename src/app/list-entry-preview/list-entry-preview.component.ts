import {Component, Input, OnInit} from '@angular/core';
import ToDoList from "../../Model/ToDoList/ToDoList";

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
    public checkBoxClicked(state: boolean): void {
        if (this.entry != undefined) {
            this.entry.checked = state;
        }
    }

    // callback from html
    public listEntryClicked(): void {
        console.log("clicked");
    }
}
