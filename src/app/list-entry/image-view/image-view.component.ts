import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import IToDoEntry, {IToDoEntry_t} from "../../../Model/ToDoList/ToDoEntry";

@Component({
    selector: 'app-image-view',
    templateUrl: './image-view.component.html',
    styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
    @ViewChild("image") image?: ElementRef;
    @Input() entry?: IToDoEntry;
    public castedEntry?: IToDoEntry_t<string>;

    private zoomedImage: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        this.castedEntry = <IToDoEntry_t<string>>this.entry;
    }

    public imageClicked(): void {
        let nativeElement: HTMLImageElement = this.image?.nativeElement;
        nativeElement?.setAttribute("width", !this.zoomedImage ? "700" : "400");


        this.zoomedImage = !this.zoomedImage;
    }
}
