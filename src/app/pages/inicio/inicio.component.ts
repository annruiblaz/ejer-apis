import { Component } from '@angular/core';
import {PersonajesSpace} from "../../common/personajes";
import {DataServiceService} from "../../services/data-service.service";
import {Pokemon} from "../../common/cartas";
import {Agente} from "../../common/agente";
import {Armas} from "../../common/armas";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  infoPersonajes!: PersonajesSpace[];
  infoPokemon!: Pokemon;
  infoAgentes!: Agente;
  infoArmas!: Armas[];

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.cargarPersonajes();
  }
  private cargarArmas() {
    this.dataService.getArmas().subscribe(
      {
        next: data =>{
          this.infoArmas = data;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Completado')
        }
      }
    )
  }
  private cargarAgentes() {
    this.dataService.getAgentes().subscribe(
      {
        next: data =>{
          this.infoAgentes = data;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Completado')
        }
      }
    )
  }
  private cargarPokemon() {
    this.dataService.getPokemon().subscribe(
      {
        next: data => {
          this.infoPokemon = data;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Completado')
        }
      }
    )
  }
  private cargarPersonajes() {
    this.dataService.getPersonajes().subscribe(
      {
        next: data => {
          this.infoPersonajes = data;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Completado')
        }
      }
    )
  }
}
