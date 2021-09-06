import {Injectable} from '@angular/core';
import IMessageBoxContent from "./IMessageBoxContent";

@Injectable({
    providedIn: 'root'
})
export class MessageBoxService {
    private static _instance?: MessageBoxService = undefined;
    public static get Instance(): MessageBoxService | undefined { return MessageBoxService._instance; }

    public onConfirm?: () => void;
    public onCancel?: () => void;

    public onNewMessage?: (message: IMessageBoxContent[]) => void;

    constructor() {
        MessageBoxService._instance = this;
    }

    public open(...messages: IMessageBoxContent[]): void {
        if (!this.onNewMessage) return;

        this.onNewMessage(messages);
    }
}
