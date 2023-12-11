import {Component, OnInit} from '@angular/core';
import {Armas} from "../../common/armas";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit{
  infoArmas!: Armas[];

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.cargarArmas();
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
}
