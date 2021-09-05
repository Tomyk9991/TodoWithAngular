import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageBoxService {
    private static _instance?: MessageBoxService = undefined;
    public static get Instance(): MessageBoxService | undefined { return MessageBoxService._instance; }

    public onConfirm?: () => void;
    public onCancel?: () => void;

    public onNewMessage?: (message: string) => void;
    public onClosePrompt?: () => void;

    constructor() {
        MessageBoxService._instance = this;
    }

    public log(message: string): void {
        if (!this.onNewMessage) return;
        this.onNewMessage(message);
    }

    public close(): void {

    }
}
