import {Component, OnInit, Output} from '@angular/core';
import LocaleManager from "../Utilities/LocaleManager";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public homeLocale: string = "";
    public myListsLocale: string = "";
    public settingsLocale: string = "";

    constructor() {
    }

    ngOnInit(): void {
        this.homeLocale = LocaleManager.translate("Home");
        this.myListsLocale = LocaleManager.translate("MyLists");
        this.settingsLocale = LocaleManager.translate("Settings");
    }

    onHeaderClicked(button: number): void {
        console.log(button);
    }
}
