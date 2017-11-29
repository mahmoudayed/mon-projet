import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnectBoService } from "../common/services/connect-bo.service";
import { XmlService } from "../common/services/xml.service";
import { AlertModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [
    ConnectBoService,
    XmlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
