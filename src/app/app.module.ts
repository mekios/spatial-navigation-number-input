import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlarmDigitComponent } from './alarm-digit/alarm-digit.component';
import { ZeropadPipe } from './zeropad.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlarmDigitComponent,
    ZeropadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
