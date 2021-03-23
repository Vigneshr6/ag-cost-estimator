import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { CivilWorkService } from './civil-work.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CivilWorkService],
  bootstrap: [AppComponent],
})
export class AppModule { }
