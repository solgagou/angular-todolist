import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddComponent } from './components/addTask/add.component';

@NgModule({
  declarations: [
   ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AddComponent,
    ListComponent
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: []
})
export class AppModule { }
