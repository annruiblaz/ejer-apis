import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Agente} from "../common/agente";
import {Armas} from "../common/armas";
import {Pokemon} from "../common/cartas";
import {PersonajesSpace} from "../common/personajes";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getAgentes(): Observable<Agente>{
    return this.http.get<Agente>('https://valorant-api.com/v1/agents')
  }

  getArmas(): Observable<Armas[]>{
    return this.http.get<Armas[]>('https://mhw-db.com/weapons?q={"id":{"$gte":1,"$lte":20}}')
  }

  getPokemones(): Observable<Pokemon>{
    return this.http.get<Pokemon>('https://api.pokemontcg.io/v2/cards?page=1&pageSize=20')
  }
  getPokemon(): Observable<Pokemon>{
    return this.http.get<Pokemon>('https://api.pokemontcg.io/v2/cards/xy1-1')
  }

  getPersonajes(): Observable<PersonajesSpace[]>{
    return this.http.get<PersonajesSpace[]>('https://finalspaceapi.com/api/v0/character/')
  }


}
