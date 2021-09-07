import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import ToDoList from "../../../Model/ToDoList/ToDoList";
import {ToDoListService} from "../../Utilities/Services/Todo service/to-do-list.service";
import {MessageBoxService} from "../../Utilities/Services/Message box service/message-box.service";
import IMessageBoxContent from "../../Utilities/Services/Message box service/IMessageBoxContent";
import {HeaderMessageContent} from "../../Utilities/Services/Message box service/HeaderMessageContent";
import HyperLinkMessageContent from "../../Utilities/Services/Message box service/HyperLinkMessageContent";
import {Router} from "@angular/router";

@Component({
    selector: 'app-list-entry-preview',
    templateUrl: './list-entry-preview.component.html',
    styleUrls: ['./list-entry-preview.component.css']
})
export class ListEntryPreviewComponent implements OnInit {
    @Input() public first: boolean = false;
    @Input() public last: boolean = false;
    @Input() public todoList: ToDoList | undefined;

    @ViewChildren("inputElement") private inputElement?: QueryList<any>;
    public isEditMode: boolean = false;

    private timer: any;
    private preventSimpleClick: boolean = false;

    constructor(private todoListService: ToDoListService,
                private messageBoxService: MessageBoxService,
                private router: Router) {

    }

    ngOnInit(): void {

    }

    // Gets called, when a change in "todoList" is made.
    private async onChangeDetected(): Promise<void> {
        if (this.todoList !== undefined) {
            await this.todoListService.updateToDoList(this.todoList?.hash, this.todoList);
        }
    }

    // callback from html
    public onClick(): void {
        this.timer = 0;
        this.preventSimpleClick = false;
        let delay: number = 200;

        this.timer = setTimeout(() => {
            if (!this.preventSimpleClick && !this.isEditMode) {
                this.router.navigate([`/list/${this.todoList?.hash}`])
            }
        }, delay);
    }

    // callback from html
    public async submit(inputElement: HTMLInputElement): Promise<void> {
        let title: string = inputElement.value;
        let titleWithoutSpaces: string = title.replace(/\s/g, "");

        if (titleWithoutSpaces === "") { // true, if only spaces are submitted
            return;
        }

        console.log(inputElement.value);

        this.lostFocus();

        if (this.todoList !== undefined) {
            this.todoList.title = title;
            await this.onChangeDetected();
        }
    }


    // callback from html
    public onDoubleClick(): void {
        this.preventSimpleClick = true;
        clearTimeout(this.timer);

        this.isEditMode = true;
        this.onFocus();
    }

    //callback from html
    public onFocus(): void {
        this.inputElement?.changes.subscribe((d: QueryList<any>) => {
            if (d.length) {
                d.first.nativeElement.focus();
            }
        });

    }

    // callback from html
    public lostFocus(): void {
        this.isEditMode = false;
    }

    // callback from html
    public async checkBoxClicked(state: boolean): Promise<void> {
        if (this.todoList != undefined) {
            this.todoList.isComplete = state;
            await this.onChangeDetected();
        }
    }

    // callback from html
    public deleteEntryPrompt(): void {
        if (this.todoList !== undefined) {
            let m1: IMessageBoxContent = new HeaderMessageContent("You're about to delete the entry: ");
            let m2: IMessageBoxContent = new HyperLinkMessageContent(`${this.todoList.title}`, `/list/${this.todoList.hash}`);
            let m3: IMessageBoxContent = new HeaderMessageContent("Do you want to continue?");

            this.messageBoxService.open(m1, m2, m3);

            this.messageBoxService.onCancel = () => { };

            this.messageBoxService.onConfirm = async () => {
                if (this.todoList !== undefined) {
                    await this.todoListService.removeTodoList(this.todoList.hash);
                    window.location.reload();
                }
            };
        }
    }
}
