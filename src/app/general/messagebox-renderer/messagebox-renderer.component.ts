import {Component, OnInit} from '@angular/core';
import {MessageBoxService} from "../../Utilities/Services/message-box.service";

@Component({
    selector: 'app-messagebox-renderer',
    templateUrl: './messagebox-renderer.component.html',
    styleUrls: ['./messagebox-renderer.component.css']
})
export class MessageboxRendererComponent implements OnInit {
    public message: string = "";

    constructor(private messageBoxService: MessageBoxService) {
        messageBoxService.onNewMessage = (m: string) => {
            this.message = m;
        };

        messageBoxService.onClosePrompt = () => {

        };
    }

    ngOnInit(): void {
    }

}
