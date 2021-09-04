import {Component, Input, OnInit} from '@angular/core';
import ToDoList from "../../../Model/ToDoList/ToDoList";
import {ToDoListService} from "../../Utilities/Services/to-do-list.service";

@Component({
    selector: 'app-list-overview',
    templateUrl: './list-overview.component.html',
    styleUrls: ['./list-overview.component.css']
})
export class ListOverviewComponent implements OnInit {
    @Input() public amount: number = -1; //For effect, ~.component.html
    public lists: ToDoList[] = [];

    constructor(private listService: ToDoListService) {
    }

    async ngOnInit(): Promise<any> {
        this.lists = await this.listService.getRecentLists(this.amount);
    }
}
