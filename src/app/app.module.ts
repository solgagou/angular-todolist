import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// No declaramos AddComponent y ListComponent aquí, solo los importamos
import { AddComponent } from './components/addTask/add.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [],  // Removemos AddComponent y ListComponent de declaraciones
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AddComponent,    // Importamos AddComponent
    ListComponent,   // Importamos ListComponent
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: []
})
export class AppModule { }
