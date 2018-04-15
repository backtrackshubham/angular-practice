import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DetailComponent } from './detail/detail.component';
import {MockService} from './service/mock.service';
import { MessageComponent } from './message/message.component';
import {MessageService} from './service/message.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule],
  providers: [
    MockService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
