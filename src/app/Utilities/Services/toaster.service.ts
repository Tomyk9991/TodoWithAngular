import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export default class ToasterService {
    private static _instance?: ToasterService = undefined;
    public static get Instance(): ToasterService | undefined { return ToasterService._instance; }
    public onLogAdded?: (settings: ToasterSettings) => void;

    constructor() {
        ToasterService._instance = this;
    }

    public log(str: string, duration: number = 1500): void {
        if (!this.onLogAdded) return;
        let settings: ToasterSettings = new ToasterSettings(str, duration);
        this.onLogAdded(settings);
    }
}

export class ToasterSettings {
    public str: string = "";
    public duration: number = 1500;

    constructor(str: string, duration: number) {
        this.str = str;
        this.duration = duration;
    }

    public startTimer(plusDuration: number, onIsComplete?: (settings: ToasterSettings) => void): void {
        setTimeout(() => {
            if (!onIsComplete) return;
            onIsComplete(this);
        }, this.duration + plusDuration);
    }
}
