import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CharactersComponent } from './pages/characters/characters.component';
import {HttpClientModule} from "@angular/common/http";
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgentsComponent,
    WeaponsComponent,
    CardsComponent,
    CharactersComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
