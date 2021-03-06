import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationAlertComponent } from './publications/publication-alert/publication-alert.component';
import { PublicationDetailsComponent } from './publications/publication-details/publication-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicationsComponent,
    PublicationAlertComponent,
    PublicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
