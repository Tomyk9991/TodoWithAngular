import {Component, OnInit} from '@angular/core';
import ToasterService, {ToasterSettings} from "../../Utilities/Services/toaster.service";

@Component({
    selector: 'app-toast-renderer',
    templateUrl: './toast-renderer.component.html',
    styleUrls: ['./toast-renderer.component.css']
})
export class ToastRendererComponent implements OnInit {
    public logs: ToasterSettings[] = [];
    public message: string = "";
    public currentCSSClass = "center-bottom-inactive";

    private isInAnimation: boolean = false;

    private static cssNames: string[] = ["center-bottom-inactive", "center-bottom-active"];


    constructor(private toastService: ToasterService) {
        toastService.onLogAdded = (settings: ToasterSettings) => {
            this.logs.push(settings);

            if (!this.isInAnimation) {
                this.showNewest();
            }
        };
    }

    ngOnInit(): void {
    }

    private async showNewest(overwrite?: ToasterSettings): Promise<void> {
        let onIsComplete: (s: ToasterSettings) => void = (settings: ToasterSettings) => {
            let index: number = this.logs.indexOf(settings, 0);
            if (index > -1) {
                this.logs.splice(index, 1);
            }

            this.showNewest();
        }

        let current: ToasterSettings = overwrite || this.logs[0];

        if (current) {
            current.startTimer(200, onIsComplete);

            this.isInAnimation = true;
            this.message = current.str;
            this.currentCSSClass = ToastRendererComponent.cssNames[1];

            await new Promise(resolve => setTimeout(resolve, current.duration));

            this.currentCSSClass = ToastRendererComponent.cssNames[0];
        } else {
            this.currentCSSClass = ToastRendererComponent.cssNames[0];
            this.isInAnimation = false;
        }
    }
}
