import {Component, Input, OnInit} from '@angular/core';
import ToDoList from "../../../Model/ToDoList/ToDoList";
import {ToDoListService} from "../../Utilities/Services/to-do-list.service";
import {MessageBoxService} from "../../Utilities/Services/message-box.service";

@Component({
    selector: 'app-list-entry-preview',
    templateUrl: './list-entry-preview.component.html',
    styleUrls: ['./list-entry-preview.component.css']
})
export class ListEntryPreviewComponent implements OnInit {
    @Input() public first: boolean = false;
    @Input() public last: boolean = false;

    @Input() public todoList: ToDoList | undefined;
    constructor(private todoListService: ToDoListService, private messageBoxService: MessageBoxService) {

    }

    ngOnInit(): void {

    }

    // callback from html
    public checkBoxClicked(state: boolean): void {
        if (this.todoList != undefined) {
            this.todoList.isComplete = state;
        }
    }

    // callback from html
    public deleteEntryPrompt(): void {
        if (this.todoList !== undefined) {
            this.messageBoxService.log("You're about to delete the entry. Do you want to continue?");

            this.messageBoxService.onConfirm = () => {

            };

            this.messageBoxService.onCancel = () => {

            };
            // await this.todoListService.removeTodoList(this.todoList.hash);
        }
    }
}
