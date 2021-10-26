import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ContentResolver } from './services/contentResolver';
import { HttpClientModule } from '@angular/common/http';
import { ContentHelper } from './services/contentHelper';
import { MainModule } from './main/main.module';
import { WindowRef } from './services/windowRef.service';
import { NewServicesComponent } from './main/new-services/new-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule
  ],
  providers: [ContentResolver, ContentHelper, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
