import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocaleService {
    private translationUnit: any = {
        "Home_en": "Home",
        "Home_de": "Startseite",

        "Settings_en": "Settings",
        "Settings_de": "Einstellungen",

        "MyLists_en": "My lists",
        "MyLists_de": "Meine Listen"
    };

    private language: string = "_en";
    constructor() {
    }

    public set Language(language: string) {
        this.language = language;
    }

    public translate(key: string): string {
        return this.translate_impl(key, this.language);
    }

    private translate_impl(key: string, language: string): string {
        //translation unit may come from backend
        return this.translationUnit[key + language].toString();
    }
}
