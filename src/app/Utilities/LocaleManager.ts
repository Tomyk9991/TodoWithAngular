export default abstract class LocaleManager {
    private static translationUnit: any = {
        "Home_en": "Home",
        "Home_de": "Startseite",

        "Settings_en": "Settings",
        "Settings_de": "Einstellungen",

        "MyLists_en": "My lists",
        "MyLists_de": "Meine Listen"
    };

    private static language: string = "_en";

    public static set Language(language: string) {
        LocaleManager.language = language;
    }

    public static translate(key: string): string {
        return LocaleManager.translate_impl(key, LocaleManager.language);
    }

    private static translate_impl(key: string, language: string): string {
        return LocaleManager.translationUnit[key + language].toString();
    }
}
