import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-list-entry-preview-loadanimation',
    templateUrl: './list-entry-preview-loadanimation.component.html',
    styleUrls: ['./list-entry-preview-loadanimation.component.css']
})
export class ListEntryPreviewLoadanimationComponent implements OnInit {

    @Input() first: boolean = false;
    @Input() last: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
