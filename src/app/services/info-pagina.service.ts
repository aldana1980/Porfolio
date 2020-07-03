import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { InfoPagina, infoEquipo } from '../interfases/info-pagina.info';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargado = false;
  equipo: infoEquipo[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // leer arvhico json
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargado = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http
      .get('https://angular-porfolio-cfcea.firebaseio.com/equipo.json')
      .subscribe((resp: infoEquipo[]) => {
        this.equipo = resp;
      });
  }
}
