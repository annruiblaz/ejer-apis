import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {Pokemon} from "../../common/cartas";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  infoPokemon!: Pokemon;

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.cargarPokemones();
  }


  private cargarPokemones() {
    this.dataService.getPokemones().subscribe(
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
}
