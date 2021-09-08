import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import IToDoEntry, {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";
import IEditable from "../../../Utilities/IEditable";
import ToDoList from "../../../../Model/ToDoList/ToDoList";
import {ToDoListService} from "../../../Utilities/Services/Todo service/to-do-list.service";
import ImageEntry from "../../../../Model/ToDoList/ImageEntry";
import isImageURL from "../../../Utilities/IsImageURL";

@Component({
    selector: 'app-string-view',
    templateUrl: './string-view.component.html',
    styleUrls: ['./string-view.component.css']
})
export class StringViewComponent implements IEditable, OnInit {
    @Input() entry?: IToDoEntry;
    @Input() elementIndex: number = -1;
    @Input() todoList?: ToDoList;

    public castedEntry?: IToDoEntry_t<string>;

    @ViewChildren("inputElement") private inputElement?: QueryList<any>;
    public isEditMode: boolean = false;

    constructor(private todoListService: ToDoListService) {
    }

    ngOnInit(): void {
        this.castedEntry = <IToDoEntry_t<string>>this.entry;
    }

    private async onChangeDetected(): Promise<void> {
        if (this.todoList !== undefined) {
            await this.todoListService.updateToDoList(this.todoList?.hash, this.todoList);
        }
    }

    // Called from html
    public onDoubleClick(): void {
        this.isEditMode = true;
        this.onFocus();
    }

    // Called from html
    public onFocus(): void {
        this.inputElement?.changes.subscribe((d: QueryList<any>) => {
            if (d.length) {
                d.first.nativeElement.focus();
            }
        });
    }

    // Called from html
    public onLoseFocus(): void {
        this.isEditMode = false;
    }

    // Called from html
    public async onSubmit(inputElement: HTMLInputElement): Promise<void> {
        let value: string = inputElement.value;
        let valueWithoutSpaces: string = value.replace(/\s/g, "");

        if (valueWithoutSpaces === "") { // true, if only spaces are submitted
            return;
        }

        this.onLoseFocus();

        if (this.castedEntry !== undefined) {
            if (this.todoList !== undefined) {
                this.castedEntry.value = value;

                if (isImageURL(value)) {
                    this.todoList.entries[this.elementIndex] = new ImageEntry(value);
                }

                await this.onChangeDetected();
            }
        }
    }
}
