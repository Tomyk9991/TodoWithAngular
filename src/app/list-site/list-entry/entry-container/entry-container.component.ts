import {Component, Injectable, Input, OnInit} from '@angular/core';
import IToDoEntry, {IToDoEntry_t} from "../../../../Model/ToDoList/ToDoEntry";
import ToDoList from "../../../../Model/ToDoList/ToDoList";
import IRepository from "../../../Utilities/Services/Repositories/IRepository";
import RepositoryEntryUpdater from "../../../Utilities/Services/Repositories/RepositoryEntryUpdater";
import {ToDoListService} from "../../../Utilities/Services/Todo service/to-do-list.service";
import IMessageBoxContent from "../../../Utilities/Services/Message box service/IMessageBoxContent";
import {HeaderMessageContent} from "../../../Utilities/Services/Message box service/HeaderMessageContent";
import HyperLinkMessageContent from "../../../Utilities/Services/Message box service/HyperLinkMessageContent";
import {MessageBoxService} from "../../../Utilities/Services/Message box service/message-box.service";
import ImageMessageContent from "../../../Utilities/Services/Message box service/ImageMessageContent";
import {ToDoEntryType} from "../../../../Model/ToDoList/ToDoEntryType";
import TextMessageContent from "../../../Utilities/Services/Message box service/TextMessageContent";

@Component({
    selector: 'app-entry-container',
    templateUrl: './entry-container.component.html',
    styleUrls: ['./entry-container.component.css']
})
@Injectable()
export class EntryContainerComponent implements OnInit {
    @Input() entry?: IToDoEntry;
    @Input() todoList?: ToDoList;

    private readonly updateEntryRepo: IRepository<string, ToDoList>;
    public castedEntry?: IToDoEntry_t<string>;

    constructor(private todoListService: ToDoListService,
                private messageBoxService: MessageBoxService) {
        this.updateEntryRepo = new RepositoryEntryUpdater<string>();
    }

    ngOnInit(): void {
        this.castedEntry = <IToDoEntry_t<string>>this.entry;
    }

    //Callback from html
    public async deleteEntry(): Promise<void> {
        if(this.todoList !== undefined && this.castedEntry !== undefined) {
            let m1: IMessageBoxContent = new HeaderMessageContent("You're about to delete the entry: ");
            let m2: IMessageBoxContent | undefined;
            let m3: IMessageBoxContent = new HeaderMessageContent("Do you want to continue?");


            if (this.castedEntry.htmlRepresentation() == String(ToDoEntryType.Str)) {
                m2 = new TextMessageContent(`${this.castedEntry.value}`);
            } else if (this.castedEntry.htmlRepresentation() == String(ToDoEntryType.Img)) {
                m2 = new ImageMessageContent(`${this.castedEntry.value}`);
            }


            if (m2 !== undefined) {
                this.messageBoxService.open(m1, m2, m3);
                this.messageBoxService.onCancel = () => { };

                this.messageBoxService.onConfirm = async () => {
                    if (this.todoList !== undefined && this.castedEntry !== undefined) {
                        let l: ToDoList = this.updateEntryRepo.action(this.todoList, this.castedEntry);
                        await this.todoListService.updateToDoList(l.hash, l);

                        window.location.reload();
                    }
                };
            }
        }
    }
}
