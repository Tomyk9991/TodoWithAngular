import {Component, Input, OnInit} from '@angular/core';
import ToDoList from "../../../Model/ToDoList/ToDoList";
import {ToDoListService} from "../../Utilities/Services/Todo service/to-do-list.service";

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

    public async onAddList(): Promise<void> {
        let list: ToDoList = await this.listService.createNewTodoList("New todo list...");
        this.lists.unshift(list);
    }


    async ngOnInit(): Promise<void> {
        this.lists = await this.listService.getRecentLists(this.amount);
    }
}
