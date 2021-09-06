import {Component, Input, OnInit} from '@angular/core';
import ToDoList from "../../../Model/ToDoList/ToDoList";
import {ToDoListService} from "../../Utilities/Services/Todo service/to-do-list.service";
import {MessageBoxService} from "../../Utilities/Services/Message box service/message-box.service";
import IMessageBoxContent from "../../Utilities/Services/Message box service/IMessageBoxContent";
import {HeaderMessageContent} from "../../Utilities/Services/Message box service/HeaderMessageContent";
import TextMessageContent from "../../Utilities/Services/Message box service/TextMessageContent";
import HyperLinkMessageContent from "../../Utilities/Services/Message box service/HyperLinkMessageContent";

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
            let m1: IMessageBoxContent = new HeaderMessageContent("You're about to delete the entry: ");
            let m2: IMessageBoxContent = new HyperLinkMessageContent(`${this.todoList.title}`, `/list/${this.todoList.hash}`);
            let m3: IMessageBoxContent = new HeaderMessageContent("Do you want to continue?");

            this.messageBoxService.open(m1, m2, m3);

            this.messageBoxService.onConfirm = () => {
                console.log("CONFIRMED FROM LST ENTRY PREVIEW");
            };

            this.messageBoxService.onCancel = () => {
                console.log("CANCELED FROM LST ENTRY PREVIEW");
            };
            // await this.todoListService.removeTodoList(this.todoList.hash);
        }
    }
}
