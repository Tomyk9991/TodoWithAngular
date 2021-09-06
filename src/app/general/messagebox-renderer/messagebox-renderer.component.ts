import {Component, OnInit} from '@angular/core';
import {MessageBoxService} from "../../Utilities/Services/Message box service/message-box.service";
import IMessageBoxContent from "../../Utilities/Services/Message box service/IMessageBoxContent";
import HyperLinkMessageContent from "../../Utilities/Services/Message box service/HyperLinkMessageContent";

@Component({
    selector: 'app-messagebox-renderer',
    templateUrl: './messagebox-renderer.component.html',
    styleUrls: ['./messagebox-renderer.component.css']
})
export class MessageboxRendererComponent implements OnInit {
    public messages: IMessageBoxContent[] = [];

    constructor(private messageBoxService: MessageBoxService) {
        messageBoxService.onNewMessage = (ms: IMessageBoxContent[]) => {
            this.messages = ms;
        };
    }

    //Called from html
    public onPromptAccept(): void {
        this.messages = [];

        if (!this.messageBoxService.onConfirm) return;
        this.messageBoxService.onConfirm();
    }

    //Called from html
    public onPromptCancel(): void {
        this.messages = [];

        if (!this.messageBoxService.onCancel) return;
        this.messageBoxService.onCancel();
    }

    ngOnInit(): void {
    }

    public caster(message: IMessageBoxContent): HyperLinkMessageContent {
        return <HyperLinkMessageContent>message;
    }
}
