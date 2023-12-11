import {Component, OnInit} from '@angular/core';
import {Agente} from "../../common/agente";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit{
  infoAgentes!: Agente;
  ess: any;
  constructor(private dataService: DataServiceService) {
  }
  ngOnInit(): void {
    this.cargarAgentes();
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
}
