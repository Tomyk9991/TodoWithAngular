import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home-site/home/home.component";
import {ListOverviewComponent} from "./list-site/list-overview/list-overview.component";
import {SettingsComponent} from "./settings/settings.component";
import {ListEntryComponent} from "./list-site/list-entry/list-entry.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'mylists', component: ListOverviewComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'list/:id', component: ListEntryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
