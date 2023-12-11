import {Component, OnInit} from '@angular/core';
import {PersonajesSpace} from "../../common/personajes";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{
  infoPersonajes!: PersonajesSpace[];

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.cargarPersonajes();
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
