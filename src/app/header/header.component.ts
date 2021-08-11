import {Component, OnInit, Output} from '@angular/core';
import {LocaleService} from "../Utilities/Services/locale.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public homeLocale: string = "";
    public myListsLocale: string = "";
    public settingsLocale: string = "";

    public currentlySelected: number = 0;

    constructor(private locale: LocaleService) {
    }

    ngOnInit(): void {
        this.homeLocale = this.locale.translate("Home");
        this.myListsLocale = this.locale.translate("MyLists");
        this.settingsLocale = this.locale.translate("Settings");

        this.currentlySelected = 0;
    }

    onHeaderClicked(button: number): void {
        this.currentlySelected = button;
    }
}
