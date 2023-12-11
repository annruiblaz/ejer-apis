import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentsComponent} from "./pages/agents/agents.component";
import {CardsComponent} from "./pages/cards/cards.component";
import {CharactersComponent} from "./pages/characters/characters.component";
import {WeaponsComponent} from "./pages/weapons/weapons.component";
import {InicioComponent} from "./pages/inicio/inicio.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'agents',
    component: AgentsComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },{
    path: 'characters',
    component: CharactersComponent
  },{
    path: 'weapons',
    component: WeaponsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
