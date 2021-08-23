import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoListService} from "../Utilities/Services/to-do-list.service";
import ToDoList from "../../Model/ToDoList/ToDoList";

@Component({
    selector: 'app-list-entry',
    templateUrl: './list-entry.component.html',
    styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent implements OnInit {
    public static SelectedEntry: ToDoList;
    @Input() public entry?: ToDoList;

    private route: ActivatedRoute;
    private listService: ToDoListService;

    constructor(route: ActivatedRoute, listService: ToDoListService) {
        this.route = route;
        this.listService = listService;
        this.entry = ListEntryComponent.SelectedEntry;
    }

    async ngOnInit(): Promise<void> {
        const hash: number = Number(this.route.snapshot.paramMap.get('id'));
        await this.listService.getList(hash);
    }
}
