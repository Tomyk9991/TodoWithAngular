import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './general/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home-site/home/home.component';
import {ListOverviewComponent} from './list-site/list-overview/list-overview.component';
import {SettingsComponent} from './settings/settings.component';
import { ListEntryPreviewComponent } from './list-site/list-entry-preview/list-entry-preview.component';
import { ListEntryComponent } from './list-site/list-entry/list-entry.component';
import { StringViewComponent } from './list-site/list-entry/string-view/string-view.component';
import { ImageViewComponent } from './list-site/list-entry/image-view/image-view.component';
import { EntryContainerComponent } from './list-site/list-entry/entry-container/entry-container.component';
import { ToastRendererComponent } from './general/toast-renderer/toast-renderer.component';
import { MyListsComponent } from './list-site/my-lists/my-lists.component';
import { MessageboxRendererComponent } from './general/messagebox-renderer/messagebox-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListOverviewComponent,
    SettingsComponent,
    ListEntryPreviewComponent,
    ListEntryComponent,
    StringViewComponent,
    ImageViewComponent,
    EntryContainerComponent,
    ToastRendererComponent,
    MyListsComponent,
    MessageboxRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
