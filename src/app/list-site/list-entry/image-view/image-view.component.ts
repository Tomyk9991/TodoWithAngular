import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import IToDoEntry, {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";
import ToDoList from "../../../../Model/ToDoList/ToDoList";
import IEditable from "../../../Utilities/IEditable";
import {ToDoListService} from "../../../Utilities/Services/Todo service/to-do-list.service";
import isImageURL from "../../../Utilities/IsImageURL";
import ImageEntry from "../../../../Model/ToDoList/ImageEntry";
import StringEntry from "../../../../Model/ToDoList/StringEntry";

@Component({
    selector: 'app-image-view',
    templateUrl: './image-view.component.html',
    styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit, IEditable {
    @Input() entry?: IToDoEntry;
    @Input() elementIndex: number = -1;
    @Input() todoList?: ToDoList;

    @ViewChildren("inputElement") private inputElement?: QueryList<any>;
    public isEditMode: boolean = false;

    @ViewChild("image") image?: ElementRef;
    public castedEntry?: IToDoEntry_t<string>;

    public zoomedImage: boolean = false;
    private timer: any;
    private preventSimpleClick: boolean = false;

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
        console.log("double click");
        this.isEditMode = true;
        this.onFocus();
    }

    // Called from html
    public imageClicked(): void {
        this.timer = 0;
        this.preventSimpleClick = false;
        let delay: number = 200;

        this.timer = setTimeout(() => {
            if (!this.preventSimpleClick && !this.isEditMode) { // Single click
                // let nativeElement: HTMLImageElement = this.image?.nativeElement;
                // nativeElement?.setAttribute("width", !this.zoomedImage ? "90%" : "30%");
                this.zoomedImage = !this.zoomedImage;
            }
        }, delay);
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

                if (!isImageURL(value)) {
                    this.todoList.entries[this.elementIndex] = new StringEntry(value);
                }

                await this.onChangeDetected();
            }
        }
    }
}
