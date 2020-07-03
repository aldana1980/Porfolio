import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { infoEquipo } from '../../interfases/info-pagina.info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: infoEquipo[];

  constructor(private infoservice: InfoPaginaService) {

    this.equipo = infoservice.equipo;

  }


  ngOnInit(): void {

  }

}
