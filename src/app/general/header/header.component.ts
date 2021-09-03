import {Component, OnInit} from '@angular/core';
import {LocaleService} from "../../Utilities/Services/locale.service";
import {Event, NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public headerElements: HeaderElement[] = [];
    public currentlySelected: number = 0;

    constructor(private locale: LocaleService, private router: Router) {
        router.events.subscribe((event:Event) => {
            if(event instanceof NavigationEnd) {
                this.currentlySelected = this.headerElements.findIndex((element: HeaderElement) => element.routerLink === router.url);
            }
        });
    }

    ngOnInit(): void {
        this.headerElements.push(new HeaderElement("/home", this.locale.translate("Home")));
        this.headerElements.push(new HeaderElement("/mylists", this.locale.translate("MyLists")));
        this.headerElements.push(new HeaderElement("/settings", this.locale.translate("Settings")));
    }

    onHeaderClicked(button: number): void {
        this.currentlySelected = button;
    }
}

class HeaderElement {
    constructor(public routerLink: string, public locale: string) {}
}
