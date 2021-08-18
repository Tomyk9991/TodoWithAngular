import {Component, Input, OnInit} from '@angular/core';
import ToDoList from "../../Model/ToDoList/ToDoList";
import {ToDoListService} from "../Utilities/Services/to-do-list.service";

@Component({
    selector: 'app-list-overview',
    templateUrl: './list-overview.component.html',
    styleUrls: ['./list-overview.component.css']
})
export class ListOverviewComponent implements OnInit {
    @Input() public amount: number = 15;
    public lists: ToDoList[] = [];

    constructor(private listService: ToDoListService) {
    }

    ngOnInit(): void {
        this.lists = this.listService.getLists(this.amount);
    }
}
