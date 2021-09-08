import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoListService} from "../../Utilities/Services/Todo service/to-do-list.service";
import ToDoList from "../../../Model/ToDoList/ToDoList";
import StringEntry from "../../../Model/ToDoList/StringEntry";

//List entry is somewhat an entry point. its not referenced by another component
@Component({
    selector: 'app-list-entry',
    templateUrl: './list-entry.component.html',
    styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent implements OnInit {
    public entry?: ToDoList;

    private route: ActivatedRoute;
    private todoListService: ToDoListService;

    constructor(route: ActivatedRoute, listService: ToDoListService) {
        this.route = route;
        this.todoListService = listService;
    }

    async ngOnInit(): Promise<void> {
        const hash: number = Number(this.route.snapshot.paramMap.get('id'));
        this.entry = await this.todoListService.getList(hash);
    }

    // Called from html
    public async onAddList(): Promise<void> {
        if (this.entry !== undefined) {
            this.entry.entries.unshift(new StringEntry("New entry..."));
            await this.todoListService.updateToDoList(this.entry.hash, this.entry);
        }
    }
}
