import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ListOverviewComponent} from './list-overview/list-overview.component';
import {SettingsComponent} from './settings/settings.component';
import { ListEntryPreviewComponent } from './list-entry-preview/list-entry-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListOverviewComponent,
    SettingsComponent,
    ListEntryPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
